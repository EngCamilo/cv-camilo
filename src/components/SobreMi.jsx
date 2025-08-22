import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SobreMi() {
  const { t } = useTranslation();
  return (
    <section className="w-full my-10 bg-gray-200 p-8 rounded-xl flex flex-wrap gap-8 xl:flex-nowrap">
        <div className="bg-white shadow-md p-6 rounded-lg basis-full xl:basis-2/3">
          <h2>{t('perfil_titulo')}</h2>
          <p className="mb-3">{t('perfil_parrafo1')}</p>
          <p className="mb-3">{t('perfil_parrafo2')}</p>
          <p className="mb-3">{t('perfil_parrafo3')}</p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg basis-full xl:basis-1/3 text-xs">
          <h2>{t('informacion_personal')}</h2>
          <p className="mb-3"><span className="uppercase">{t('documento')}</span><br /><b>1.031.135.635</b></p>
          <p className="mb-3"><span className="uppercase">{t('nacimiento')}</span><br /><b>{t('fecha_nacimiento')}</b></p>
          <p className="mb-3"><span className="uppercase">{t('lugar')}</span><br /><b>Bogotá D.C.</b></p>
          <p className="mb-3"><span className="uppercase">{t('estado_civil')}</span><br /><b>{t('estado_civil_valor')}</b></p>
          <p className="mb-3"><span className="uppercase">{t('direccion')}</span><br /><b>Cra 24 2 297 T24 Apto 301<br />Madrid, Cundinamarca</b></p>
          <p className="mb-3"><span className="uppercase">{t('telefonos')}</span><br /><b>+57 316 8255217 - 601 8730917</b></p>
          <p className="mb-3"><span className="uppercase">{t('email')}</span><br /><b>camilocb.design@gmail.com</b></p>
        </div>
    </section>
  );
}