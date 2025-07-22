<?php
namespace App\Controller;


use App\Entity\WineCellar;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class PublicCaveController extends AbstractController
{
    #[Route('/cave/{id}', name: 'app_public_cave')]
        public function viewCave(WineCellar $cave): Response
        {
            return $this->render('cave/public_show.html.twig', [
                'cave' => $cave,
            ]);
        }
}