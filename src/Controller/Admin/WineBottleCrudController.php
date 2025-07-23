<?php

namespace App\Controller\Admin;

use App\Entity\WineBottle;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class WineBottleCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return WineBottle::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            ImageField::new('picture', 'Image de la bouteille')
            ->setBasePath('uploads/bottles')
            ->setUploadDir('public/uploads/bottles'),
            TextField::new('name'),
            NumberField::new('year'),
            TextEditorField::new('description'),
            AssociationField::new('grape','Cépage')
            ->setFormTypeOption('attr', ['class' => 'js-grape']),
            AssociationField::new('country','Pays')
            ->setFormTypeOption('attr', ['class' => 'js-country']),
            AssociationField::new('region','Région')
            ->setFormTypeOption('attr', ['class' => 'js-region'])
        ];
    }
    
}
