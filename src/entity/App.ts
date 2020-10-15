import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity('apps')
export class App {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
    addName: string

    @Column({ type: 'varchar', unique: true, nullable: false })
    identifier: string

    @Column({ type: 'varchar', nullable: false })
    icon: string

    @Column({ type: 'varchar', nullable: false })
    description: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @ManyToOne(() => User, user => user.apps) 
    author: User
}