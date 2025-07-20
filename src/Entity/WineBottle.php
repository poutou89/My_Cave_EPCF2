<?php

namespace App\Entity;

use App\Repository\WineBottleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: WineBottleRepository::class)]
class WineBottle
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column]
    private ?int $year = null;

    #[ORM\Column(length: 255)]
    private ?string $picture = null;

    #[ORM\ManyToOne(inversedBy: 'wineBottles')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Grape $grape = null;

    #[ORM\ManyToOne(inversedBy: 'wineBottles')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Country $country = null;

    #[ORM\ManyToOne(inversedBy: 'wineBottles')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Region $region = null;

    /**
     * @var Collection<int, winecellar>
     */
    #[ORM\ManyToMany(targetEntity: winecellar::class, inversedBy: 'wineBottles')]
    private Collection $cave;

    public function __construct()
    {
        $this->cave = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getYear(): ?int
    {
        return $this->year;
    }

    public function setYear(int $year): static
    {
        $this->year = $year;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): static
    {
        $this->picture = $picture;

        return $this;
    }

    public function getGrape(): ?Grape
    {
        return $this->grape;
    }

    public function setGrape(?Grape $grape): static
    {
        $this->grape = $grape;

        return $this;
    }

    public function getCountry(): ?Country
    {
        return $this->country;
    }

    public function setCountry(?Country $country): static
    {
        $this->country = $country;

        return $this;
    }

    public function getRegion(): ?Region
    {
        return $this->region;
    }

    public function setRegion(?Region $region): static
    {
        $this->region = $region;

        return $this;
    }

    /**
     * @return Collection<int, winecellar>
     */
    public function getCave(): Collection
    {
        return $this->cave;
    }

    public function addCave(winecellar $cave): static
    {
        if (!$this->cave->contains($cave)) {
            $this->cave->add($cave);
        }

        return $this;
    }

    public function removeCave(winecellar $cave): static
    {
        $this->cave->removeElement($cave);

        return $this;
    }
}
