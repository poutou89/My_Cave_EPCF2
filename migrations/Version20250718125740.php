<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250718125740 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE country (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE grape (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE region (id INT AUTO_INCREMENT NOT NULL, country_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, INDEX IDX_F62F176F92F3E70 (country_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE wine_bottle (id INT AUTO_INCREMENT NOT NULL, grape_id INT NOT NULL, country_id INT NOT NULL, region_id INT NOT NULL, name VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, year INT NOT NULL, picture VARCHAR(255) NOT NULL, INDEX IDX_5530BC676B7990EA (grape_id), INDEX IDX_5530BC67F92F3E70 (country_id), INDEX IDX_5530BC6798260155 (region_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE wine_bottle_winecellar (wine_bottle_id INT NOT NULL, winecellar_id INT NOT NULL, INDEX IDX_8BCB80674570C9D8 (wine_bottle_id), INDEX IDX_8BCB80677AC5C80B (winecellar_id), PRIMARY KEY(wine_bottle_id, winecellar_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE region ADD CONSTRAINT FK_F62F176F92F3E70 FOREIGN KEY (country_id) REFERENCES country (id)');
        $this->addSql('ALTER TABLE wine_bottle ADD CONSTRAINT FK_5530BC676B7990EA FOREIGN KEY (grape_id) REFERENCES grape (id)');
        $this->addSql('ALTER TABLE wine_bottle ADD CONSTRAINT FK_5530BC67F92F3E70 FOREIGN KEY (country_id) REFERENCES country (id)');
        $this->addSql('ALTER TABLE wine_bottle ADD CONSTRAINT FK_5530BC6798260155 FOREIGN KEY (region_id) REFERENCES region (id)');
        $this->addSql('ALTER TABLE wine_bottle_winecellar ADD CONSTRAINT FK_8BCB80674570C9D8 FOREIGN KEY (wine_bottle_id) REFERENCES wine_bottle (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE wine_bottle_winecellar ADD CONSTRAINT FK_8BCB80677AC5C80B FOREIGN KEY (winecellar_id) REFERENCES wine_cellar (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE region DROP FOREIGN KEY FK_F62F176F92F3E70');
        $this->addSql('ALTER TABLE wine_bottle DROP FOREIGN KEY FK_5530BC676B7990EA');
        $this->addSql('ALTER TABLE wine_bottle DROP FOREIGN KEY FK_5530BC67F92F3E70');
        $this->addSql('ALTER TABLE wine_bottle DROP FOREIGN KEY FK_5530BC6798260155');
        $this->addSql('ALTER TABLE wine_bottle_winecellar DROP FOREIGN KEY FK_8BCB80674570C9D8');
        $this->addSql('ALTER TABLE wine_bottle_winecellar DROP FOREIGN KEY FK_8BCB80677AC5C80B');
        $this->addSql('DROP TABLE country');
        $this->addSql('DROP TABLE grape');
        $this->addSql('DROP TABLE region');
        $this->addSql('DROP TABLE wine_bottle');
        $this->addSql('DROP TABLE wine_bottle_winecellar');
    }
}
