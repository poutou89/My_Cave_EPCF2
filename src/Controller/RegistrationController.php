<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class RegistrationController extends AbstractController
{
    #[Route('/register', name: 'app_register')]
    public function register(
        Request $request,
        UserPasswordHasherInterface $userPasswordHasher,
        Security $security,
        EntityManagerInterface $entityManager
    ): Response {
        if ($request->isMethod('POST')) {
            $user = new User();

            // Récupération des champs du formulaire
            $user->setNom($request->request->get('nom'));
            $user->setPrenom($request->request->get('prenom'));
            $user->setEmail($request->request->get('email'));

            $plainPassword = $request->request->get('plainPassword');
            $hashedPassword = $userPasswordHasher->hashPassword($user, $plainPassword);
            $user->setPassword($hashedPassword);

            // Vérifie la case à cocher
            if (!$request->request->get('agreeTerms')) {
                $this->addFlash('error', 'Vous devez accepter les conditions.');
                return $this->redirectToRoute('app_register');
            }

            // Enregistre l'utilisateur
            $entityManager->persist($user);
            $entityManager->flush();

            // Connecte l'utilisateur automatiquement
            return $security->login($user, 'form_login', 'main');
        }

        return $this->render('registration/register.html.twig');
    }
    }

