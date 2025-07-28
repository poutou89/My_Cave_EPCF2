<?php

namespace App\Controller\Admin;

use App\Entity\WineCellar;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;

class WineCellarCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return WineCellar::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Cave')
            ->setEntityLabelInPlural('Caves')
            ->setDefaultSort(['nom' => 'ASC']);
    }

    public function configureFields(string $pageName): iterable
    {
        // Le nom de la cave
        yield TextField::new('nom', 'Nom de la cave');

        // L'association ManyToMany vers les bouteilles
        yield AssociationField::new('wineBottles', 'Bouteilles')
            ->setFormTypeOptions([
                'choice_label' => 'name',     // utilise la propriété “name” de WineBottle
                'by_reference' => false,      // nécessaire pour ManyToMany
            ])
            ->setCrudController(WineBottleCrudController::class)
            ->setHelp('Sélectionnez les bouteilles à associer à cette cave.');
    }
}