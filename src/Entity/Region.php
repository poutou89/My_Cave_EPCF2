<?php

namespace App\Entity;

use App\Repository\RegionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RegionRepository::class)]
class Region
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\ManyToOne(inversedBy: 'regions')]
    private ?Country $country = null;

    /**
     * @var Collection<int, WineBottle>
     */
    #[ORM\OneToMany(targetEntity: WineBottle::class, mappedBy: 'region')]
    private Collection $wineBottles;

    public function __construct()
    {
        $this->wineBottles = new ArrayCollection();
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

    public function getCountry(): ?Country
    {
        return $this->country;
    }

    public function setCountry(?Country $country): static
    {
        $this->country = $country;

        return $this;
    }

    public function __toString(): string
    {
        return $this->name ?? '';
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
            $wineBottle->setRegion($this);
        }

        return $this;
    }

    public function removeWineBottle(WineBottle $wineBottle): static
    {
        if ($this->wineBottles->removeElement($wineBottle)) {
            // set the owning side to null (unless already changed)
            if ($wineBottle->getRegion() === $this) {
                $wineBottle->setRegion(null);
            }
        }

        return $this;
    }
}
