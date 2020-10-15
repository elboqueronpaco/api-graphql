import { hash } from "bcryptjs";
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert, BeforeUpdate, OneToMany} from "typeorm";
import { Roles } from "../enums/Roles.enum";
import { App } from "./App";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
    username: string;

    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    password: string;

    @Column({ type: 'enum', enum: Roles, default: Roles.USER })
    role: Roles

    @Column({ type: 'bool', default: true })
    active: boolean

    @Column()
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword () {
        if (!this.password) return
        this.password = await hash(this.password, 10)
    }

    @OneToMany(() => App, app => app.author)
    apps: App[]
}
