<?php

namespace App\Controller;

use App\Entity\WineBottle;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class AccueilController extends AbstractController
{
    #[Route('/', name: 'app_accueil')]
    public function index(EntityManagerInterface $em): Response
    {
        $lastBottles = $em->getRepository(WineBottle::class)
        ->findBy([], ['id' => 'DESC'], 10); // les 10 dernières

    return $this->render('accueil/index.html.twig', [
        'lastBottles' => $lastBottles,
    ]);
}
}
