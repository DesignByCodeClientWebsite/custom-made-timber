
const contact = {
    name: 'Coenie',
    surname: 'Marais',
    org: 'Custom Design Timber by Coenie Marais',
    email: 'coenie@coeniemarais.co.za',
    cell: '+27822964611',
    tel: '',
    address: '27 Shiraz Rd \n Rustdal\n Cape Town \n 7580'
}

export const vcard = `
BEGIN:VCARD
VERSION:3.0
N:${contact.name};${contact.surname};;;
FN:${contact.name} ${contact.surname}
ORG:${contact.org}.
PHOTO;VALUE=URI;TYPE=PNG:https://i.pravatar.cc/300
TEL;TYPE=WORK,VOICE,PREF:${contact.cell}
TEL;TYPE=WORK,VOICE:${contact.tel}
ADR;TYPE=WORK,PREF:;;${contact.address}
LABEL;TYPE=WORK,PREF:${contact.address}
EMAIL:${contact.email}
END:VCARD
`

