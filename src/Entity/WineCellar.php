<?php

namespace App\Entity;

use App\Repository\WineCellarRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\User;

#[ORM\Entity(repositoryClass: WineCellarRepository::class)]
class WineCellar
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?user $user = null;

    /**
     * @var Collection<int, WineBottle>
     */
    #[ORM\ManyToMany(targetEntity: WineBottle::class, mappedBy: 'cave')]
    private Collection $wineBottles;

    public function __construct()
    {
        $this->wineBottles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

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
            $wineBottle->addCave($this);
        }

        return $this;
    }

    public function removeWineBottle(WineBottle $wineBottle): static
    {
        if ($this->wineBottles->removeElement($wineBottle)) {
            $wineBottle->removeCave($this);
        }

        return $this;
    }
    
        public function addBottle(WineBottle $bottle): static
    {
        return $this->addWineBottle($bottle);
    }

    public function getBottles(): Collection
    {
        return $this->getWineBottles();
    }
}
