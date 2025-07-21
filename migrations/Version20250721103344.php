<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250721103344 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE grape_country (grape_id INT NOT NULL, country_id INT NOT NULL, INDEX IDX_877B7A166B7990EA (grape_id), INDEX IDX_877B7A16F92F3E70 (country_id), PRIMARY KEY(grape_id, country_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE grape_country ADD CONSTRAINT FK_877B7A166B7990EA FOREIGN KEY (grape_id) REFERENCES grape (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE grape_country ADD CONSTRAINT FK_877B7A16F92F3E70 FOREIGN KEY (country_id) REFERENCES country (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE grape_country DROP FOREIGN KEY FK_877B7A166B7990EA');
        $this->addSql('ALTER TABLE grape_country DROP FOREIGN KEY FK_877B7A16F92F3E70');
        $this->addSql('DROP TABLE grape_country');
    }
}
