<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\WineBottle;
use App\Entity\WineCellar;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminDashboard;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\Routing\Annotation\Route;

#[AdminDashboard(routePath: '/admin', routeName: 'admin')]
class DashboardController extends AbstractDashboardController
{
    private EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function index(): Response
    {
        $bottleCount = $this->em->getRepository(WineBottle::class)->count([]);
        $cellarCount = $this->em->getRepository(WineCellar::class)->count([]);
        $userCount   = $this->em->getRepository(User::class)->count([]);

        return $this->render('admin/index.html.twig', [
            'bottleCount' => $bottleCount,
            'cellarCount' => $cellarCount,
            'userCount'   => $userCount,
        ]);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('My Cave EPCF2');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Les bouteilles', 'fas fa-list', WineBottle::class);
        yield MenuItem::linkToCrud('Utilisateurs', 'fas fa-list', User::class);
        yield MenuItem::linkToCrud('Les caves', 'fas fa-warehouse', WineCellar::class)
         ->setController(WineCellarCrudController::class);
        yield MenuItem::linkToUrl('🚪 Quitter l\'admin', 'fa fa-sign-out', $this->generateUrl('app_accueil'));
    }
}
