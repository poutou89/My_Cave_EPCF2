<?php

namespace App\Entity;

use App\Repository\CountryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CountryRepository::class)]
class Country
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    /**
     * @var Collection<int, Region>
     */
    #[ORM\OneToMany(targetEntity: Region::class, mappedBy: 'country')]
    private Collection $regions;

    /**
     * @var Collection<int, WineBottle>
     */
    #[ORM\OneToMany(targetEntity: WineBottle::class, mappedBy: 'country')]
    private Collection $wineBottles;

    /**
     * @var Collection<int, Grape>
     */
    #[ORM\ManyToMany(targetEntity: Grape::class, mappedBy: 'countries')]
    private Collection $grapes;

    public function __construct()
    {
        $this->regions = new ArrayCollection();
        $this->wineBottles = new ArrayCollection();
        $this->grapes = new ArrayCollection();
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


    public function __toString(): string
    {
        return $this->name ?? '';
    }
    /**
     * @return Collection<int, Region>
     */
    public function getRegions(): Collection
    {
        return $this->regions;
    }

    public function addRegion(Region $region): static
    {
        if (!$this->regions->contains($region)) {
            $this->regions->add($region);
            $region->setCountry($this);
        }

        return $this;
    }

    public function removeRegion(Region $region): static
    {
        if ($this->regions->removeElement($region)) {
            // set the owning side to null (unless already changed)
            if ($region->getCountry() === $this) {
                $region->setCountry(null);
            }
        }

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
            $wineBottle->setCountry($this);
        }

        return $this;
    }

    public function removeWineBottle(WineBottle $wineBottle): static
    {
        if ($this->wineBottles->removeElement($wineBottle)) {
            // set the owning side to null (unless already changed)
            if ($wineBottle->getCountry() === $this) {
                $wineBottle->setCountry(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Grape>
     */
    public function getGrapes(): Collection
    {
        return $this->grapes;
    }

    public function addGrape(Grape $grape): static
    {
        if (!$this->grapes->contains($grape)) {
            $this->grapes->add($grape);
            $grape->addCountry($this);
        }

        return $this;
    }

    public function removeGrape(Grape $grape): static
    {
        if ($this->grapes->removeElement($grape)) {
            $grape->removeCountry($this);
        }

        return $this;
    }
}
