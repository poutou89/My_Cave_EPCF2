<?php

namespace App\Entity;

use App\Repository\GrapeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GrapeRepository::class)]
class Grape
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    /**
     * @var Collection<int, WineBottle>
     */
    #[ORM\OneToMany(targetEntity: WineBottle::class, mappedBy: 'grape')]
    private Collection $wineBottles;

    /**
     * @var Collection<int, Country>
     */
    #[ORM\ManyToMany(targetEntity: Country::class, inversedBy: 'grapes')]
    private Collection $countries;

    public function __construct()
    {
        $this->wineBottles = new ArrayCollection();
        $this->countries = new ArrayCollection();
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

    /**
     * @return Collection<int, WineBottle>
     */
    public function getWineBottles(): Collection
    {
        return $this->wineBottles;
    }

    public function addWineBottle(WineBottle $wineBottle): static
    {
        if (!$this->wineBottles->contains($wineBottle)) {
            $this->wineBottles->add($wineBottle);
            $wineBottle->setGrape($this);
        }

        return $this;
    }

    public function removeWineBottle(WineBottle $wineBottle): static
    {
        if ($this->wineBottles->removeElement($wineBottle)) {
            // set the owning side to null (unless already changed)
            if ($wineBottle->getGrape() === $this) {
                $wineBottle->setGrape(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Country>
     */
    public function getCountries(): Collection
    {
        return $this->countries;
    }

    public function addCountry(Country $country): static
    {
        if (!$this->countries->contains($country)) {
            $this->countries->add($country);
        }

        return $this;
    }

    public function removeCountry(Country $country): static
    {
        $this->countries->removeElement($country);

        return $this;
    }
}
