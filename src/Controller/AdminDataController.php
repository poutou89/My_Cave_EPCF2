<?php

namespace App\Controller;

use App\Entity\Country;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class AdminDataController extends AbstractController
{
    #[Route('/admin/regions-by-country/{id}', name: 'admin_regions_by_country')]
    public function getRegionsByCountry(Country $country): JsonResponse
    {
        $regions = $country->getRegions()->map(fn($region) => [
            'id' => $region->getId(),
            'name' => $region->getName(),
        ]);

        return $this->json($regions);
    }

    #[Route('/admin/grapes-by-country/{id}', name: 'admin_grapes_by_country')]
    public function getGrapesByCountry(Country $country): JsonResponse
    {
        $grapes = $country->getGrapes()->map(fn($grape) => [
            'id' => $grape->getId(),
            'name' => $grape->getName(),
        ]);

        return $this->json($grapes);
    }
}