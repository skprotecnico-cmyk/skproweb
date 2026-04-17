
import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    "id": "todos",
    "label": "Todos"
  },
  {
    "id": "archivo",
    "label": "Archivo y Organización"
  },
  {
    "id": "papeleria",
    "label": "Papelería"
  },
  {
    "id": "escritura",
    "label": "Escritura y Escolar"
  },
  {
    "id": "oficina",
    "label": "Oficina"
  },
  {
    "id": "impresion",
    "label": "Impresión"
  },
  {
    "id": "mobiliario",
    "label": "Equipos y Mobiliario"
  }
];

const products = [
  {
    "id": 1,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Carpeta 3 Aros Azul 1\" Carta",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/carpeta-3-aros-azul-1-carta.png",
    "featured": false
  },
  {
    "id": 2,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Archivador de Palanca Legal 7CM",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/archivador-de-palanca-legal-7cm.png",
    "featured": false
  },
  {
    "id": 3,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Archivador Lomo Ancho Carta 7CM",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/archivador-lomo-ancho-carta-7cm.png",
    "featured": false
  },
  {
    "id": 4,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "File Manila Tamaño Carta",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/file-manila-tamano-carta.png",
    "featured": false
  },
  {
    "id": 5,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Hojas Protectoras Carta",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/hojas-protectoras-carta.png",
    "featured": false
  },
  {
    "id": 6,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Carpeta c/ Liga Archivador",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/carpeta-c-liga-archivador.png",
    "featured": false
  },
  {
    "id": 7,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Sobre Manila Carta 9x12 PLG",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/sobre-manila-carta-9x12-plg.png",
    "featured": false
  },
  {
    "id": 8,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Sobre Manila A4 10x13 PLG",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/sobre-manila-a4-10x13-plg.png",
    "featured": false
  },
  {
    "id": 9,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Carpeta con Liga Tamaño A4 Colores Neon",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/carpeta-con-liga-tamano-a4-colores-neon.png",
    "featured": false
  },
  {
    "id": 10,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Sobre Plástico Horiz. c/ Hilo Tamaño Carta",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/sobre-plastico-horiz-c-hilo-tamano-carta.png",
    "featured": false
  },
  {
    "id": 11,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Carpeta Manila c/ Amarillo Legal",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/carpeta-manila-c-amarillo-legal.png",
    "featured": false
  },
  {
    "id": 12,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Carpeta Manila c/ Amarillo Pastel Legal",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/carpeta-manila-c-amarillo-pastel-legal.png",
    "featured": false
  },
  {
    "id": 13,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Carpeta Manila c/ Verde Pastel Legal",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/carpeta-manila-c-verde-pastel-legal.png",
    "featured": false
  },
  {
    "id": 14,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Carpeta Manila c/ Azul Pastel Legal",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/carpeta-manila-c-azul-pastel-legal.png",
    "featured": false
  },
  {
    "id": 15,
    "category": "archivo",
    "subcategory": "Encuadernación",
    "name": "Lomos Metálicos",
    "price": "Consultar",
    "description": "Encuadernación - producto del catálogo SKPRO.",
    "image": "/productos/lomos-metalicos.png",
    "featured": false
  },
  {
    "id": 16,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Lomos Plásticos",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/lomos-plasticos.png",
    "featured": false
  },
  {
    "id": 17,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Carpeta Acordeón",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/carpeta-acordeon.png",
    "featured": false
  },
  {
    "id": 18,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Archivador Carpeta",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/archivador-carpeta.png",
    "featured": false
  },
  {
    "id": 19,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Caja Organizadora",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/caja-organizadora.png",
    "featured": false
  },
  {
    "id": 20,
    "category": "archivo",
    "subcategory": "Archivo",
    "name": "Fundas para Plastificar",
    "price": "Consultar",
    "description": "Archivo - producto del catálogo SKPRO.",
    "image": "/productos/fundas-para-plastificar.png",
    "featured": false
  },
  {
    "id": 21,
    "category": "archivo",
    "subcategory": "Organización",
    "name": "Grapas Lisas 26/6 5.000 UND",
    "price": "Consultar",
    "description": "Organización - producto del catálogo SKPRO.",
    "image": "/productos/grapas-lisas-26-6-5-000-und.png",
    "featured": true
  },
  {
    "id": 22,
    "category": "archivo",
    "subcategory": "Organización",
    "name": "Ganchos Doble Clip 3/4 PULG 19 MM",
    "price": "Consultar",
    "description": "Organización - producto del catálogo SKPRO.",
    "image": "/productos/ganchos-doble-clip-3-4-pulg-19-mm.png",
    "featured": false
  },
  {
    "id": 23,
    "category": "archivo",
    "subcategory": "Organización",
    "name": "Ganchos Doble Clip 2 PULG 51 MM",
    "price": "Consultar",
    "description": "Organización - producto del catálogo SKPRO.",
    "image": "/productos/ganchos-doble-clip-2-pulg-51-mm.png",
    "featured": false
  },
  {
    "id": 24,
    "category": "archivo",
    "subcategory": "Organización",
    "name": "Ganchos Doble Clip 1 PULG 25 MM",
    "price": "Consultar",
    "description": "Organización - producto del catálogo SKPRO.",
    "image": "/productos/ganchos-doble-clip-1-pulg-25-mm.png",
    "featured": false
  },
  {
    "id": 25,
    "category": "archivo",
    "subcategory": "Organización",
    "name": "Bandas de Gomas",
    "price": "Consultar",
    "description": "Organización - producto del catálogo SKPRO.",
    "image": "/productos/bandas-de-gomas.png",
    "featured": false
  },
  {
    "id": 26,
    "category": "archivo",
    "subcategory": "Organización",
    "name": "Kit de Oficina D/6 PCS Metal",
    "price": "Consultar",
    "description": "Organización - producto del catálogo SKPRO.",
    "image": "/productos/kit-de-oficina-d-6-pcs-metal.png",
    "featured": false
  },
  {
    "id": 27,
    "category": "papeleria",
    "subcategory": "Papelería",
    "name": "Notas Autoadhesivas Mixtos",
    "price": "Consultar",
    "description": "Papelería - producto del catálogo SKPRO.",
    "image": "/productos/notas-autoadhesivas-mixtos.png",
    "featured": false
  },
  {
    "id": 28,
    "category": "papeleria",
    "subcategory": "Papelería",
    "name": "Block de Cartulinas Col. Surtidos 25PCS",
    "price": "Consultar",
    "description": "Papelería - producto del catálogo SKPRO.",
    "image": "/productos/block-de-cartulinas-col-surtidos-25pcs.png",
    "featured": false
  },
  {
    "id": 29,
    "category": "papeleria",
    "subcategory": "Papelería",
    "name": "Notas Autoadhesivos Tipo Abanico 75x75",
    "price": "Consultar",
    "description": "Papelería - producto del catálogo SKPRO.",
    "image": "/productos/notas-autoadhesivos-tipo-abanico-75x75.png",
    "featured": false
  },
  {
    "id": 30,
    "category": "papeleria",
    "subcategory": "Papelería",
    "name": "Papel Autoadhesivo Color Plata Tamaño Carta",
    "price": "Consultar",
    "description": "Papelería - producto del catálogo SKPRO.",
    "image": "/productos/papel-autoadhesivo-color-plata-tamano-carta.png",
    "featured": false
  },
  {
    "id": 31,
    "category": "papeleria",
    "subcategory": "Papelería",
    "name": "Etiquetas de Precios",
    "price": "Consultar",
    "description": "Papelería - producto del catálogo SKPRO.",
    "image": "/productos/etiquetas-de-precios.png",
    "featured": false
  },
  {
    "id": 32,
    "category": "papeleria",
    "subcategory": "Papelería",
    "name": "Bloc de Notas Rayado Tamaño Legal",
    "price": "Consultar",
    "description": "Papelería - producto del catálogo SKPRO.",
    "image": "/productos/bloc-de-notas-rayado-tamano-legal.png",
    "featured": false
  },
  {
    "id": 33,
    "category": "papeleria",
    "subcategory": "Papelería",
    "name": "Cuadernos",
    "price": "Consultar",
    "description": "Papelería - producto del catálogo SKPRO.",
    "image": "/productos/cuadernos.png",
    "featured": false
  },
  {
    "id": 34,
    "category": "papeleria",
    "subcategory": "Papelería",
    "name": "Block de Notas",
    "price": "Consultar",
    "description": "Papelería - producto del catálogo SKPRO.",
    "image": "/productos/block-de-notas.png",
    "featured": false
  },
  {
    "id": 35,
    "category": "escritura",
    "subcategory": "Escritura",
    "name": "Marcadores Blister 6 PCS",
    "price": "Consultar",
    "description": "Escritura - producto del catálogo SKPRO.",
    "image": "/productos/marcadores-blister-6-pcs.png",
    "featured": true
  },
  {
    "id": 36,
    "category": "escritura",
    "subcategory": "Escritura",
    "name": "Marcador Pizarra 3PZS",
    "price": "Consultar",
    "description": "Escritura - producto del catálogo SKPRO.",
    "image": "/productos/marcador-pizarra-3pzs.png",
    "featured": false
  },
  {
    "id": 37,
    "category": "escritura",
    "subcategory": "Escritura",
    "name": "Bolígrafo Azul Trion",
    "price": "Consultar",
    "description": "Escritura - producto del catálogo SKPRO.",
    "image": "/productos/boligrafo-azul-trion.png",
    "featured": false
  },
  {
    "id": 38,
    "category": "escritura",
    "subcategory": "Escritura",
    "name": "Bolígrafo Negro Diamond",
    "price": "Consultar",
    "description": "Escritura - producto del catálogo SKPRO.",
    "image": "/productos/boligrafo-negro-diamond.png",
    "featured": false
  },
  {
    "id": 39,
    "category": "escritura",
    "subcategory": "Escritura",
    "name": "Bolígrafo Azul Diamond",
    "price": "Consultar",
    "description": "Escritura - producto del catálogo SKPRO.",
    "image": "/productos/boligrafo-azul-diamond.png",
    "featured": false
  },
  {
    "id": 40,
    "category": "escritura",
    "subcategory": "Escritura",
    "name": "Lápices de Colores 36",
    "price": "Consultar",
    "description": "Escritura - producto del catálogo SKPRO.",
    "image": "/productos/lapices-de-colores-36.png",
    "featured": false
  },
  {
    "id": 41,
    "category": "escritura",
    "subcategory": "Escritura",
    "name": "Lápiz de Grafito Triang c/Borrar",
    "price": "Consultar",
    "description": "Escritura - producto del catálogo SKPRO.",
    "image": "/productos/lapiz-de-grafito-triang-c-borrar.png",
    "featured": false
  },
  {
    "id": 42,
    "category": "escritura",
    "subcategory": "Escritura",
    "name": "Corrector 2 in 1 Brocha y Lápiz",
    "price": "Consultar",
    "description": "Escritura - producto del catálogo SKPRO.",
    "image": "/productos/corrector-2-in-1-brocha-y-lapiz.png",
    "featured": false
  },
  {
    "id": 43,
    "category": "escritura",
    "subcategory": "Escritura",
    "name": "Crayones d/ Madera 6PCS",
    "price": "Consultar",
    "description": "Escritura - producto del catálogo SKPRO.",
    "image": "/productos/crayones-d-madera-6pcs.png",
    "featured": false
  },
  {
    "id": 44,
    "category": "escritura",
    "subcategory": "Escritura",
    "name": "Marcadores de Agua 12 UNDS Escolar",
    "price": "Consultar",
    "description": "Escritura - producto del catálogo SKPRO.",
    "image": "/productos/marcadores-de-agua-12-unds-escolar.png",
    "featured": false
  },
  {
    "id": 45,
    "category": "escritura",
    "subcategory": "Escritura",
    "name": "Acuarela 12 Colores con Pincel",
    "price": "Consultar",
    "description": "Escritura - producto del catálogo SKPRO.",
    "image": "/productos/acuarela-12-colores-con-pincel.png",
    "featured": false
  },
  {
    "id": 46,
    "category": "escritura",
    "subcategory": "Escritura",
    "name": "Pinceles 7 Piezas",
    "price": "Consultar",
    "description": "Escritura - producto del catálogo SKPRO.",
    "image": "/productos/pinceles-7-piezas.png",
    "featured": false
  },
  {
    "id": 47,
    "category": "escritura",
    "subcategory": "Escritura",
    "name": "Rotulador de Tiza",
    "price": "Consultar",
    "description": "Escritura - producto del catálogo SKPRO.",
    "image": "/productos/rotulador-de-tiza.png",
    "featured": false
  },
  {
    "id": 48,
    "category": "escritura",
    "subcategory": "Escritura",
    "name": "Minas 0.5 HB",
    "price": "Consultar",
    "description": "Escritura - producto del catálogo SKPRO.",
    "image": "/productos/minas-0-5-hb.png",
    "featured": false
  },
  {
    "id": 49,
    "category": "escritura",
    "subcategory": "Escritura",
    "name": "Portaminas 0.5",
    "price": "Consultar",
    "description": "Escritura - producto del catálogo SKPRO.",
    "image": "/productos/portaminas-0-5.png",
    "featured": false
  },
  {
    "id": 50,
    "category": "escritura",
    "subcategory": "Escritura",
    "name": "Marcador Pizarra p/Redonda Negro",
    "price": "Consultar",
    "description": "Escritura - producto del catálogo SKPRO.",
    "image": "/productos/marcador-pizarra-p-redonda-negro.png",
    "featured": false
  },
  {
    "id": 51,
    "category": "escritura",
    "subcategory": "Escolar",
    "name": "Tizas de Colores",
    "price": "Consultar",
    "description": "Escolar - producto del catálogo SKPRO.",
    "image": "/productos/tizas-de-colores.png",
    "featured": false
  },
  {
    "id": 52,
    "category": "escritura",
    "subcategory": "Escolar",
    "name": "Tiza Blanca Milan",
    "price": "Consultar",
    "description": "Escolar - producto del catálogo SKPRO.",
    "image": "/productos/tiza-blanca-milan.png",
    "featured": false
  },
  {
    "id": 53,
    "category": "escritura",
    "subcategory": "Escolar",
    "name": "Colores Maped",
    "price": "Consultar",
    "description": "Escolar - producto del catálogo SKPRO.",
    "image": "/productos/colores-maped.png",
    "featured": false
  },
  {
    "id": 54,
    "category": "escritura",
    "subcategory": "Escolar",
    "name": "Pinta Caras Multicolor",
    "price": "Consultar",
    "description": "Escolar - producto del catálogo SKPRO.",
    "image": "/productos/pinta-caras-multicolor.png",
    "featured": false
  },
  {
    "id": 55,
    "category": "oficina",
    "subcategory": "Oficina",
    "name": "Trituradora de Papel",
    "price": "Consultar",
    "description": "Oficina - producto del catálogo SKPRO.",
    "image": "/productos/trituradora-de-papel.png",
    "featured": false
  },
  {
    "id": 56,
    "category": "oficina",
    "subcategory": "Oficina",
    "name": "Dispensador de Cinta",
    "price": "Consultar",
    "description": "Oficina - producto del catálogo SKPRO.",
    "image": "/productos/dispensador-de-cinta.png",
    "featured": false
  },
  {
    "id": 57,
    "category": "oficina",
    "subcategory": "Oficina",
    "name": "Perforadora",
    "price": "Consultar",
    "description": "Oficina - producto del catálogo SKPRO.",
    "image": "/productos/perforadora.png",
    "featured": false
  },
  {
    "id": 58,
    "category": "oficina",
    "subcategory": "Oficina",
    "name": "Cinta Adhesiva 75MM",
    "price": "Consultar",
    "description": "Oficina - producto del catálogo SKPRO.",
    "image": "/productos/cinta-adhesiva-75mm.png",
    "featured": false
  },
  {
    "id": 59,
    "category": "oficina",
    "subcategory": "Oficina",
    "name": "Cinta Adhesiva 48MM",
    "price": "Consultar",
    "description": "Oficina - producto del catálogo SKPRO.",
    "image": "/productos/cinta-adhesiva-48mm.png",
    "featured": false
  },
  {
    "id": 60,
    "category": "oficina",
    "subcategory": "Oficina",
    "name": "Cinta Adhesiva 15MM",
    "price": "Consultar",
    "description": "Oficina - producto del catálogo SKPRO.",
    "image": "/productos/cinta-adhesiva-15mm.png",
    "featured": false
  },
  {
    "id": 61,
    "category": "oficina",
    "subcategory": "Oficina",
    "name": "Bolsas en Rollo",
    "price": "Consultar",
    "description": "Oficina - producto del catálogo SKPRO.",
    "image": "/productos/bolsas-en-rollo.png",
    "featured": false
  },
  {
    "id": 62,
    "category": "oficina",
    "subcategory": "Oficina",
    "name": "Clips 75MM",
    "price": "Consultar",
    "description": "Oficina - producto del catálogo SKPRO.",
    "image": "/productos/clips-75mm.png",
    "featured": false
  },
  {
    "id": 63,
    "category": "oficina",
    "subcategory": "Oficina",
    "name": "Clips 25MM",
    "price": "Consultar",
    "description": "Oficina - producto del catálogo SKPRO.",
    "image": "/productos/clips-25mm.png",
    "featured": false
  },
  {
    "id": 64,
    "category": "oficina",
    "subcategory": "Oficina",
    "name": "Clips 33MM",
    "price": "Consultar",
    "description": "Oficina - producto del catálogo SKPRO.",
    "image": "/productos/clips-33mm.png",
    "featured": false
  },
  {
    "id": 65,
    "category": "oficina",
    "subcategory": "Oficina",
    "name": "Rollo Térmico 80x70",
    "price": "Consultar",
    "description": "Oficina - producto del catálogo SKPRO.",
    "image": "/productos/rollo-termico-80x70.png",
    "featured": false
  },
  {
    "id": 66,
    "category": "oficina",
    "subcategory": "Oficina",
    "name": "Cortadora de Papel",
    "price": "Consultar",
    "description": "Oficina - producto del catálogo SKPRO.",
    "image": "/productos/cortadora-de-papel.png",
    "featured": false
  },
  {
    "id": 67,
    "category": "oficina",
    "subcategory": "Utilitarios",
    "name": "Cinta de Empaque Marrón 2\" de 70 MTS",
    "price": "Consultar",
    "description": "Utilitarios - producto del catálogo SKPRO.",
    "image": "/productos/cinta-de-empaque-marron-2-de-70-mts.png",
    "featured": false
  },
  {
    "id": 68,
    "category": "oficina",
    "subcategory": "Utilitarios",
    "name": "Tijera Oficina 8\"",
    "price": "Consultar",
    "description": "Utilitarios - producto del catálogo SKPRO.",
    "image": "/productos/tijera-oficina-8.png",
    "featured": true
  },
  {
    "id": 69,
    "category": "oficina",
    "subcategory": "Utilitarios",
    "name": "Sacapunta con Depósito Transparente",
    "price": "Consultar",
    "description": "Utilitarios - producto del catálogo SKPRO.",
    "image": "/productos/sacapunta-con-deposito-transparente.png",
    "featured": false
  },
  {
    "id": 70,
    "category": "oficina",
    "subcategory": "Utilitarios",
    "name": "Pegamento Líquido Blanco 30 GRS",
    "price": "Consultar",
    "description": "Utilitarios - producto del catálogo SKPRO.",
    "image": "/productos/pegamento-liquido-blanco-30-grs.png",
    "featured": false
  },
  {
    "id": 71,
    "category": "oficina",
    "subcategory": "Utilitarios",
    "name": "Regla 30 CM Plástico Col. Varios",
    "price": "Consultar",
    "description": "Utilitarios - producto del catálogo SKPRO.",
    "image": "/productos/regla-30-cm-plastico-col-varios.png",
    "featured": false
  },
  {
    "id": 72,
    "category": "oficina",
    "subcategory": "Utilitarios",
    "name": "Borrador Pizarra Mediano",
    "price": "Consultar",
    "description": "Utilitarios - producto del catálogo SKPRO.",
    "image": "/productos/borrador-pizarra-mediano.png",
    "featured": false
  },
  {
    "id": 73,
    "category": "oficina",
    "subcategory": "Utilitarios",
    "name": "Pegamento d/Barra 15 GRS",
    "price": "Consultar",
    "description": "Utilitarios - producto del catálogo SKPRO.",
    "image": "/productos/pegamento-d-barra-15-grs.png",
    "featured": false
  },
  {
    "id": 74,
    "category": "oficina",
    "subcategory": "Utilitarios",
    "name": "Presillas de Patas 7CM",
    "price": "Consultar",
    "description": "Utilitarios - producto del catálogo SKPRO.",
    "image": "/productos/presillas-de-patas-7cm.png",
    "featured": false
  },
  {
    "id": 75,
    "category": "oficina",
    "subcategory": "Escritorio",
    "name": "Perforadora 2 Huecos GDE 20 Hojas 8CM",
    "price": "Consultar",
    "description": "Escritorio - producto del catálogo SKPRO.",
    "image": "/productos/perforadora-2-huecos-gde-20-hojas-8cm.png",
    "featured": false
  },
  {
    "id": 76,
    "category": "oficina",
    "subcategory": "Escritorio",
    "name": "Engrapadora d/ Escritorio Med Negro",
    "price": "Consultar",
    "description": "Escritorio - producto del catálogo SKPRO.",
    "image": "/productos/engrapadora-d-escritorio-med-negro.png",
    "featured": false
  },
  {
    "id": 77,
    "category": "oficina",
    "subcategory": "Mobiliario",
    "name": "Buró Oficina T-DK1816 1,80x1,60x0,75",
    "price": "Consultar",
    "description": "Mobiliario - producto del catálogo SKPRO.",
    "image": "/productos/buro-oficina-t-dk1816-1-80x1-60x0-75.png",
    "featured": false
  },
  {
    "id": 78,
    "category": "oficina",
    "subcategory": "Equipos",
    "name": "Encuadernadora para Max 21 Páginas",
    "price": "Consultar",
    "description": "Equipos - producto del catálogo SKPRO.",
    "image": "/productos/encuadernadora-para-max-21-paginas.png",
    "featured": false
  },
  {
    "id": 79,
    "category": "oficina",
    "subcategory": "Utilitarios",
    "name": "Caja para Menudo 12\"",
    "price": "Consultar",
    "description": "Utilitarios - producto del catálogo SKPRO.",
    "image": "/productos/caja-para-menudo-12.png",
    "featured": false
  },
  {
    "id": 80,
    "category": "oficina",
    "subcategory": "Seguridad",
    "name": "Guantes Desechables",
    "price": "Consultar",
    "description": "Seguridad - producto del catálogo SKPRO.",
    "image": "/productos/guantes-desechables.png",
    "featured": false
  },
  {
    "id": 81,
    "category": "impresion",
    "subcategory": "Impresión",
    "name": "Unidad de Tambor Samsung",
    "price": "Consultar",
    "description": "Impresión - producto del catálogo SKPRO.",
    "image": "/productos/unidad-de-tambor-samsung.png",
    "featured": false
  },
  {
    "id": 82,
    "category": "impresion",
    "subcategory": "Impresión",
    "name": "Unidad de Tambor 232A",
    "price": "Consultar",
    "description": "Impresión - producto del catálogo SKPRO.",
    "image": "/productos/unidad-de-tambor-232a.png",
    "featured": false
  },
  {
    "id": 83,
    "category": "impresion",
    "subcategory": "Impresión",
    "name": "Toner 913A",
    "price": "Consultar",
    "description": "Impresión - producto del catálogo SKPRO.",
    "image": "/productos/toner-913a.png",
    "featured": false
  },
  {
    "id": 84,
    "category": "impresion",
    "subcategory": "Impresión",
    "name": "Toner 973X",
    "price": "Consultar",
    "description": "Impresión - producto del catálogo SKPRO.",
    "image": "/productos/toner-973x.png",
    "featured": true
  },
  {
    "id": 85,
    "category": "impresion",
    "subcategory": "Impresión",
    "name": "Toner TN241",
    "price": "Consultar",
    "description": "Impresión - producto del catálogo SKPRO.",
    "image": "/productos/toner-tn241.png",
    "featured": false
  },
  {
    "id": 86,
    "category": "mobiliario",
    "subcategory": "Mobiliario",
    "name": "Credenza de 2 Puertas",
    "price": "Consultar",
    "description": "Mobiliario - producto del catálogo SKPRO.",
    "image": "/productos/credenza-de-2-puertas.png",
    "featured": true
  },
  {
    "id": 87,
    "category": "mobiliario",
    "subcategory": "Mobiliario",
    "name": "Buró Oficina T2-DC1407 1,40x0,70x0,75",
    "price": "Consultar",
    "description": "Mobiliario - producto del catálogo SKPRO.",
    "image": "/productos/buro-oficina-t2-dc1407-1-40x0-70x0-75.png",
    "featured": false
  },
  {
    "id": 88,
    "category": "mobiliario",
    "subcategory": "Mobiliario",
    "name": "Buró Oficina T-DK1816 1,80x1,60x0,75",
    "price": "Consultar",
    "description": "Mobiliario - producto del catálogo SKPRO.",
    "image": "/productos/buro-oficina-t-dk1816-1-80x1-60x0-75.png",
    "featured": false
  },
  {
    "id": 89,
    "category": "mobiliario",
    "subcategory": "Mobiliario",
    "name": "Silla Oficina Victor-M Negra",
    "price": "Consultar",
    "description": "Mobiliario - producto del catálogo SKPRO.",
    "image": "/productos/silla-oficina-victor-m-negra.png",
    "featured": false
  },
  {
    "id": 90,
    "category": "mobiliario",
    "subcategory": "Presentación",
    "name": "Pizarra Acrílica 1.23 x 1.83 Marco Metal",
    "price": "Consultar",
    "description": "Presentación - producto del catálogo SKPRO.",
    "image": "/productos/pizarra-acrilica-1-23-x-1-83-marco-metal.png",
    "featured": true
  },
  {
    "id": 91,
    "category": "mobiliario",
    "subcategory": "Presentación",
    "name": "Pizarra Acrílica 0.60 x 0.90 Marco Metal",
    "price": "Consultar",
    "description": "Presentación - producto del catálogo SKPRO.",
    "image": "/productos/pizarra-acrilica-0-60-x-0-90-marco-metal.png",
    "featured": false
  },
  {
    "id": 92,
    "category": "mobiliario",
    "subcategory": "Presentación",
    "name": "Cartelera de Corcho 1.22 x 2.44 Marco Metal",
    "price": "Consultar",
    "description": "Presentación - producto del catálogo SKPRO.",
    "image": "/productos/cartelera-de-corcho-1-22-x-2-44-marco-metal.png",
    "featured": false
  }
];

const company = {
  name: 'Tiendas Tuoffice SKPRO',
  phone: '5355939422',
  whatsappMessage: 'Hola, quiero información sobre este producto:'
};

function productWhatsAppLink(product) {
  const message = `${company.whatsappMessage}\n\nProducto: ${product.name}\nCategoría: ${product.subcategory}\nPrecio: ${product.price}`;
  return `https://wa.me/${company.phone}?text=${encodeURIComponent(message)}`;
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [search, setSearch] = useState('');

  const featured = useMemo(() => products.filter(p => p.featured).slice(0, 6), []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === 'todos' || product.category === selectedCategory;
      const text = `${product.name} ${product.subcategory} ${product.description}`.toLowerCase();
      const searchMatch = text.includes(search.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, search]);

  return (
    <div className="page">
      <header className="hero">
        <div className="container hero-grid">
          <div className="hero-copy card">
            <div className="brand">
              <img src="/logo.jpg" alt="SKPRO" className="brand-logo" />
              <div>
                <p className="eyebrow">Catálogo online 2026</p>
                <h1>Tiendas Tuoffice SKPRO</h1>
              </div>
            </div>
            <p className="lead">
              Catálogo completo basado en el PDF original, con imágenes reales extraídas del catálogo
              y organizadas por secciones para publicar directamente en Netlify o Vercel.
            </p>
            <div className="quick-stats">
              <div><strong>92</strong><span>Productos</span></div>
              <div><strong>6</strong><span>Secciones</span></div>
              <div><strong>WhatsApp</strong><span>Pedidos directos</span></div>
            </div>
            <div className="actions">
              <a className="btn btn-dark" href="#catalogo">Ver catálogo</a>
              <a className="btn btn-light" href={`https://wa.me/${company.phone}`} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>

          <div className="hero-feature card">
            <p className="eyebrow">Productos destacados</p>
            <div className="feature-list">
              {featured.map((product) => (
                <div className="feature-item" key={product.id}>
                  <div className="feature-thumb">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div>
                    <p className="mini">{product.subcategory}</p>
                    <h3>{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="container" id="catalogo">
        <section className="toolbar card">
          <input
            className="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar producto, categoría o subcategoría"
          />
          <div className="filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={selectedCategory === category.id ? 'chip active' : 'chip'}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        <section className="section-head">
          <div>
            <p className="eyebrow">Catálogo SKPRO</p>
            <h2>{filteredProducts.length} productos visibles</h2>
          </div>
        </section>

        <section className="product-grid">
          {filteredProducts.map((product, index) => (
            <motion.article
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: Math.min(index * 0.01, 0.18) }}
            >
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-body">
                <div className="product-meta">
                  <span className="tag">{product.subcategory}</span>
                  <span className="price">{product.price}</span>
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <a
                  className="btn btn-red"
                  href={productWhatsAppLink(product)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Pedir por WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>Tiendas Tuoffice SKPRO</span>
          <span>WhatsApp: +53 55939422</span>
        </div>
      </footer>
    </div>
  );
}
