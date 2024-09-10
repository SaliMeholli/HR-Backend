import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersAndLeavesTablesYYYYMMDD implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Krijo tabelën users
    await queryRunner.query(`
      CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
      )
    `);

    // Krijo tabelën leaves me foreign key për user_id
    await queryRunner.query(`
      CREATE TABLE leaves (
        id INT AUTO_INCREMENT PRIMARY KEY,
        leaveType VARCHAR(255) NOT NULL,
        startDate VARCHAR(255) NOT NULL,
        endDate VARCHAR(255) NOT NULL,
        reason TEXT NOT NULL,
        status VARCHAR(255) NOT NULL,
        userId INT,
        CONSTRAINT FK_user FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Fshij tabelat
    await queryRunner.query(`DROP TABLE leaves`);
    await queryRunner.query(`DROP TABLE users`);
  }
}
