<?php
namespace App\Controller;

use App\Entity\WineBottle;
use App\Form\WineBottleType;
use App\Entity\WineCellar;
use App\Entity\User;
use App\Entity\Grape;
use App\Entity\Country;
use App\Entity\Region;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

class MyCaveController extends AbstractController
{
    #[Route('/my-cave', name: 'app_my_cave')]
    public function myCave(EntityManagerInterface $em): Response
    {
        $user = $this->getUser();

        if (!$user) {
            throw $this->createAccessDeniedException('Vous devez être connecté.');
        }

        $cellar = $em->getRepository(WineCellar::class)->findOneBy(['user' => $user]);

        if ($cellar) {
            // On récupère les données pour les filtres ici aussi
            $grapes = $em->getRepository(Grape::class)->findAll();
            $countries = $em->getRepository(Country::class)->findAll();
            $regions = $em->getRepository(Region::class)->findAll();
            $bottles = $cellar->getWineBottles();
            return $this->render('mycave/show.html.twig', [
                'cellar' => $cellar,
                'grapes' => $grapes,
                'countries' => $countries,
                'regions' => $regions,
                'bottles'   => $bottles,
                
            ]);
        }

        // S'il n'a pas de cave, on affiche le formulaire
        return $this->render('mycave/create_prompt.html.twig');
    }

    #[Route('/create-cave', name: 'app_create_cave', methods: ['POST'])]
    public function createCave(Request $request, EntityManagerInterface $em): Response
    {
        $user = $this->getUser();

        if (!$user) {
            throw $this->createAccessDeniedException();
        }

        $name = trim($request->request->get('name'));

        if (empty($name)) {
            $this->addFlash('error', 'Le nom de la cave ne peut pas être vide.');
            return $this->redirectToRoute('app_my_cave');
        }

        $existing = $em->getRepository(WineCellar::class)->findOneBy(['user' => $user]);
        if ($existing) {
            return $this->redirectToRoute('app_my_cave');
        }

        $cellar = new WineCellar();
        $cellar->setUser($user);
        $cellar->setNom($name);
        $cellar->setCreatedAt(new \DateTimeImmutable());

        $em->persist($cellar);
        $em->flush();

        return $this->redirectToRoute('app_my_cave');
    }

    #[Route('/my-cave/filter', name: 'app_my_cave_filter', methods: ['GET'])]
    public function filter(Request $request, EntityManagerInterface $em): Response
    {
        $qb = $em->getRepository(WineBottle::class)->createQueryBuilder('b');

        if ($request->query->get('name')) {
            $qb->andWhere('b.name LIKE :name')
               ->setParameter('name', '%' . $request->query->get('name') . '%');
        }

        if ($request->query->get('year')) {
            $qb->andWhere('b.year = :year')
               ->setParameter('year', $request->query->get('year'));
        }

        if ($request->query->get('grape_id')) {
            $qb->andWhere('b.grape = :grape')
               ->setParameter('grape', $request->query->get('grape_id'));
        }

        if ($request->query->get('country_id')) {
            $qb->andWhere('b.country = :country')
               ->setParameter('country', $request->query->get('country_id'));
        }

        if ($request->query->get('region_id')) {
            $qb->andWhere('b.region = :region')
               ->setParameter('region', $request->query->get('region_id'));
        }

        $bottles = $qb->getQuery()->getResult();

        return $this->render('mycave/_bottle_results.html.twig', [
            'bottles' => $bottles,
        ]);
    }
    #[Route('/api/regions', name: 'api_regions_by_country', methods: ['GET'])]
    public function getRegions(Request $request, EntityManagerInterface $em): Response
    {
        $countryId = $request->query->get('country_id');
        $regions = [];

        if ($countryId) {
            $regions = $em->getRepository(Region::class)->findBy(['country' => $countryId]);
        } else {
            $regions = $em->getRepository(Region::class)->findAll();
        }

        $data = [];

        foreach ($regions as $region) {
            $data[] = [
                'id' => $region->getId(),
                'name' => $region->getName(),
                'country_id' => $region->getCountry()?->getId(),
                'country_name' => $region->getCountry()?->getName(),
            ];
        }

        return $this->json($data);
    }
    #[Route('/api/grapes', name: 'api_grapes_by_country', methods: ['GET'])]
    public function getGrapesByCountry(Request $request, EntityManagerInterface $em): Response
    {
        $countryId = $request->query->get('country_id');

        if (!$countryId) {
            // Si aucun pays n’est sélectionné, retourne tous les cépages
            $grapes = $em->getRepository(Grape::class)->findAll();
        } else {
            $grapes = $em->createQueryBuilder()
                ->select('g')
                ->from(Grape::class, 'g')
                ->join('g.countries', 'c')
                ->where('c.id = :countryId')
                ->setParameter('countryId', $countryId)
                ->getQuery()
                ->getResult();
        }

        $data = [];

        foreach ($grapes as $grape) {
            $data[] = [
                'id' => $grape->getId(),
                'name' => $grape->getName(),
            ];
        }

        return $this->json($data);
    }
    #[Route('/api/countries', name: 'api_countries_by_grape', methods: ['GET'])]
    public function getCountriesByGrape(Request $request, EntityManagerInterface $em): Response
    {
        $grapeId = $request->query->get('grape_id');

        if (!$grapeId) {
            $countries = $em->getRepository(Country::class)->findAll();
        } else {
            $countries = $em->createQueryBuilder()
                ->select('c')
                ->from(Country::class, 'c')
                ->join('c.grapes', 'g')
                ->where('g.id = :grapeId')
                ->setParameter('grapeId', $grapeId)
                ->getQuery()
                ->getResult();
        }

        $data = [];

        foreach ($countries as $country) {
            $data[] = [
                'id' => $country->getId(),
                'name' => $country->getName(),
            ];
        }

        return $this->json($data);
    }

    #[Route('/my-cave/bottle/new', name: 'app_bottle_new')]
    public function newBottle(EntityManagerInterface $em, Request $request, SluggerInterface $slugger): Response
    {
        $bottle = new WineBottle();

        $form = $this->createForm(WineBottleType::class, $bottle);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Traitement de l'image
            $imageFile = $form->get('picture')->getData();

            if ($imageFile) {
                $originalFilename = pathinfo($imageFile->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugger->slug($originalFilename);
                $newFilename = $safeFilename.'-'.uniqid().'.'.$imageFile->guessExtension();

                try {
                    $imageFile->move(
                        $this->getParameter('bottle_images_directory'), // paramètre défini dans services.yaml
                        $newFilename
                    );
                } catch (FileException $e) {
                    $this->addFlash('error', 'Erreur lors du téléchargement de l\'image.');
                    return $this->redirectToRoute('app_bottle_new');
                }

                $bottle->setPicture($newFilename);
                 // Enregistre le nom de l'image dans l'entité
            }

            $em->persist($bottle);
            $em->flush();

            $this->addFlash('success', 'Bouteille ajoutée avec succès !');
            return $this->redirectToRoute('app_my_cave');
        }

        return $this->render('mycave/new_bottle.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/my-cave/add-bottle/{id}', name: 'app_add_bottle_to_cellar', methods: ['POST'])]
    public function addBottleToCellar(int $id, EntityManagerInterface $em): JsonResponse
    {
        $user = $this->getUser();
        if (!$user) {
            return $this->json(['error' => 'Non autorisé'], 403);
        }

        $cellar = $em->getRepository(WineCellar::class)->findOneBy(['user' => $user]);
        if (!$cellar) {
            return $this->json(['error' => 'Aucune cave trouvée'], 404);
        }

        $bottle = $em->getRepository(WineBottle::class)->find($id);
        if (!$bottle) {
            return $this->json(['error' => 'Bouteille introuvable'], 404);
        }

        if (!$cellar->getWineBottles()->contains($bottle)) {
            $cellar->addWineBottle($bottle);
            $em->flush();
        }

        return $this->json([
            'success' => true,
            'bottleName' => $bottle->getName(),
            'bottlePicture' => $bottle->getPicture(),
            'bottleYear'    => $bottle->getYear(),
        ]);
    }

    #[Route('/my-cave/bottle/{id}/remove', name: 'app_bottle_remove', methods: ['POST'])]
    public function removeBottleFromCellar(WineBottle $bottle, EntityManagerInterface $em): Response
    {
        $user = $this->getUser();
        $cellar = $em->getRepository(WineCellar::class)->findOneBy(['user' => $user]);

        if (!$cellar) {
            throw $this->createNotFoundException('Cave introuvable.');
        }

        // 🔒 Vérifie que l'utilisateur est bien le propriétaire OU un admin
        if ($cellar->getUser() !== $user && !$this->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException();
        }

        if ($cellar->getWineBottles()->contains($bottle)) {
            $cellar->removeWineBottle($bottle);
            $em->flush();

            $this->addFlash('success', 'Bouteille retirée de votre cave.');
        }

        return $this->redirectToRoute('app_my_cave');
    }

    #[Route('/caves', name: 'app_all_caves')]
    public function allCaves(EntityManagerInterface $em): Response
    {
        $caves = $em->getRepository(WineCellar::class)->findAll();

        return $this->render('mycave/all_caves.html.twig', [
            'caves' => $caves,
        ]);
    }

    #[Route('/caves', name: 'app_all_caves')]
    public function listAllCaves(Request $request, EntityManagerInterface $em): Response
    {
        $qb = $em->createQueryBuilder()
            ->select('c', 'u', 'b')
            ->from(WineCellar::class, 'c')
            ->leftJoin('c.user', 'u')
            ->leftJoin('c.wineBottles', 'b');

        // Filtres dynamiques
        if ($request->query->get('prenom')) {
            $qb->andWhere('u.prenom LIKE :prenom')
            ->setParameter('prenom', '%' . $request->query->get('prenom') . '%');
        }

        if ($request->query->get('nom')) {
            $qb->andWhere('u.nom LIKE :nom')
            ->setParameter('nom', '%' . $request->query->get('nom') . '%');
        }

        if ($request->query->get('cave_nom')) {
            $qb->andWhere('c.nom LIKE :cave_nom')
            ->setParameter('cave_nom', '%' . $request->query->get('cave_nom') . '%');
        }

        if ($request->query->get('created_at')) {
            $qb->andWhere('c.createdAt >= :created_at')
            ->setParameter('created_at', new \DateTime($request->query->get('created_at')));
        }

        if ($request->query->get('min_bottles')) {
            $qb->groupBy('c.id')
            ->having('COUNT(b.id) >= :min_bottles')
            ->setParameter('min_bottles', (int) $request->query->get('min_bottles'));
        }

        $caves = $qb->getQuery()->getResult();

        return $this->render('mycave/all_caves.html.twig', [
            'caves' => $caves,
        ]);
    }


}