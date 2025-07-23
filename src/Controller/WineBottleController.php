<?php

namespace App\Controller;

use App\Entity\WineBottle;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class WineBottleController extends AbstractController
{
    #[Route('/bottle/{id}', name: 'bottle_detail')]
    public function show(WineBottle $bottle): Response
    {
        return $this->render('bottle/show.html.twig', [
            'bottle' => $bottle,
        ]);
    }
}
