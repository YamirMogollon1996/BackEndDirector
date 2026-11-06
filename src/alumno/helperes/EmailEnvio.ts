import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer"

export const ValuesData = {
    subject: 'Benvennute',
    text: 'Tu cuenta fue creada Correctaemente',
    html: '<h1> Bienvendio </h1>'
}

@Injectable()
export class EmailEnvio {
    constructor(
        private readonly ServiciesEmail: MailerService

    ) { }
    public async Envio(destinatario: string) {
        await this.ServiciesEmail.sendMail(
            {
                to: destinatario,
                subject: ValuesData.subject,
                text: ValuesData.text,
                html: ValuesData.html
            }
        )
        return {
            mensaje: 'Correo enviado'
        }
    }
}