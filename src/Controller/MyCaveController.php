<?php
namespace App\Controller;

use App\Entity\WineCellar;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

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
            return $this->render('mycave/show.html.twig', [
                'cellar' => $cellar,
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

        // Vérifie que l'utilisateur n’a pas déjà une cave
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
}