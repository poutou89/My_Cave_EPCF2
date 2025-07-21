<?php 

namespace App\Form;

use App\Entity\WineBottle;
use App\Entity\Grape;
use App\Entity\Country;
use App\Entity\Region;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Form\Extension\Core\Type\FileType;

class WineBottleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class)
            ->add('year', IntegerType::class)
            ->add('description', TextType::class, ['required' => false])
            ->add('grape', EntityType::class, [
                'class' => Grape::class,
                'choice_label' => 'name',
                'placeholder' => '-- Cépage --',
            ])
            ->add('country', EntityType::class, [
                'class' => Country::class,
                'choice_label' => 'name',
                 'placeholder' => '-- Pays --',
            ])
            ->add('picture', FileType::class, [
                'label' => 'Image de la bouteille (JPG ou PNG)',
                'mapped' => false, // l’image ne sera pas mappée automatiquement à l’entité
                'required' => true,
                'constraints' => [
                    new File([
                        'maxSize' => '2M',
                        'mimeTypes' => [
                            'image/jpeg',
                            'image/png',
                        ],
                        'mimeTypesMessage' => 'Merci d\'uploader une image JPG ou PNG valide.',
                    ])
                ],
            ])
            ->add('region', EntityType::class, [
                'class' => Region::class,
                'choice_label' => 'name',
                'placeholder' => '-- Région --',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => WineBottle::class,
        ]);
    }
}