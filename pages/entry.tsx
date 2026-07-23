import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';

type PageModule = { default: React.FC };
type PageLoader = () => Promise<PageModule>;

const pageMap: Record<string, PageLoader> = {
  servicios: () => import('./Servicios'),
  contacto: () => import('./ContactoPage'),
  faq: () => import('./FAQ'),
  'automatizacion-procesos': () => import('./AutomatizacionProcesos'),
  'ia-empresas': () => import('./IAEmpresas'),
  'optimizacion-operativa-pymes': () => import('./OptimizacionOperativa'),
  'automatizacion-whatsapp-empresas': () => import('./AutomatizacionWhatsApp'),
  'automatizacion-seguimiento-clientes': () => import('./AutomatizacionSeguimiento'),
  'crm-pymes-seguimiento-clientes': () => import('./CRMPymesSeguimientoClientes'),
  'automatizacion-clinicas': () => import('./AutomatizacionClinicas'),
  'automatizacion-empresas-galicia': () => import('./Galicia'),
  'blog': () => import('./Blog'),
  'blog-post-1': () => import('./BlogPost1'),
  'blog-pierden-clientes': () => import('./BlogPostPierdenClientes'),
  'blog-whatsapp-manual': () => import('./BlogPostWhatsAppManual'),
  'blog-proceso-primero': () => import('./BlogPostProcesoPrimero'),
  'blog-ausencias-clinicas': () => import('./BlogPostAusenciasClinicas'),
  'blog-tareas-manuales': () => import('./BlogPostTareasManuales'),
  'blog-seguimiento-leads': () => import('./BlogPostSeguimientoLeads'),
  'blog-whatsapp-app-vs-api': () => import('./BlogPostWhatsAppAppVsAPI'),
  'blog-reactivar-leads': () => import('./BlogPostReactivarLeads'),
  'blog-confirmacion-citas-whatsapp': () => import('./BlogPostConfirmacionCitas'),
  'blog-crm-no-falla-proceso': () => import('./BlogPostCRMNoProceso'),
  'blog-herramientas-desconectadas': () => import('./BlogPostHerramientasDesconectadas'),
  'blog-todo-depende-persona': () => import('./BlogPostTodoDepende'),
  'blog-ia-pymes-sentido': () => import('./BlogPostIAPymesSentido'),
  'blog-asistente-ia-atencion': () => import('./BlogPostAsistenteIAAtencion'),
  'blog-whatsapp-crm': () => import('./BlogPostWhatsAppCRM'),
  'blog-presupuestos-seguimiento': () => import('./BlogPostPresupuestosSeguimiento'),
  'blog-automatizacion-galicia-retorno': () => import('./BlogPostAutomatizacionGaliciaRetorno'),
  'blog-seguimiento-pacientes-clinicas': () => import('./BlogPostSeguimientoPacientesClinicas'),
  'blog-academias': () => import('./BlogPostAcademias'),
  'blog-inmobiliarias': () => import('./BlogPostInmobiliarias'),
  'blog-asesorias': () => import('./BlogPostAsesorias'),
  'blog-documentar-procesos': () => import('./BlogPostDocumentarProcesos'),
  'blog-errores-automatizar': () => import('./BlogPostErroresAutomatizar'),
  'blog-mensajes-automaticos': () => import('./BlogPostMensajesAutomaticos'),
  'blog-gimnasios': () => import('./BlogPostGimnasios'),
  'blog-reformas-instaladoras': () => import('./BlogPostReformasInstaladoras'),
  'blog-automatizacion-pontevedra': () => import('./BlogPostAutomatizacionPontevedra'),
  'blog-coste-automatizar': () => import('./BlogPostCosteAutomatizar'),
  'blog-digitalizacion-automatizacion-ia': () => import('./BlogPostDigitalizacionAutomatizacionIA'),
  'blog-calendario-email-crm': () => import('./BlogPostCalendarioEmailCRM'),
  'blog-clinicas-esteticas': () => import('./BlogPostClinicasEsteticas'),
  'blog-despachos-abogados': () => import('./BlogPostDespachosAbogados'),
  'blog-onboarding-clientes': () => import('./BlogPostOnboardingClientes'),
  'blog-cobros-recordatorios': () => import('./BlogPostCobrosRecordatorios'),
  'blog-preparar-datos-ia': () => import('./BlogPostPrepararDatosIA'),
  'blog-automatizacion-vigo': () => import('./BlogPostAutomatizacionVigo'),
  'blog-automatizacion-con-ia-empresas': () => import('./BlogPostAutomatizacionConIAEmpresas'),
  'blog-procesos-con-ia': () => import('./BlogPostProcesosConIA'),
  'blog-agencia-automatizacion-ia': () => import('./BlogPostAgenciaAutomatizacionIA'),
  'blog-consultoria-automatizacion-ia': () => import('./BlogPostConsultoriaAutomatizacionIA'),
  'blog-herramientas-ia': () => import('./BlogPostHerramientasIA'),
  'blog-no-code-ia': () => import('./BlogPostNoCodeIA'),
  'blog-gestion-documental-ia': () => import('./BlogPostGestionDocumentalIA'),
  'blog-chatbot-ia-atencion': () => import('./BlogPostChatbotIAAtencion'),
  'blog-tareas-repetitivas-ia': () => import('./BlogPostTareasRepetitivasIA'),
  'blog-software-rpa-ia': () => import('./BlogPostSoftwareRPAIA'),
  'blog-que-es-automatizacion-ia': () => import('./BlogPostQueEsAutomatizacionIA'),
  'blog-como-funciona-automatizacion-ia': () => import('./BlogPostComoFuncionaAutomatizacionIA'),
  'blog-sistema-automatizado-ia': () => import('./BlogPostSistemaAutomatizadoIA'),
  'blog-tipos-automatizacion-empresa': () => import('./BlogPostTiposAutomatizacionEmpresa'),
  'blog-ia-automatizacion-juntas': () => import('./BlogPostIAAutomatizacionJuntas'),
  'blog-ejemplos-automatizacion-ia': () => import('./BlogPostEjemplosAutomatizacionIA'),
  'blog-aplicaciones-ia-pymes': () => import('./BlogPostAplicacionesIAPymes'),
  'blog-tipos-ia-pymes': () => import('./BlogPostTiposIAPymes'),
  'blog-ia-mas-usadas': () => import('./BlogPostIAMasUsadas'),
  'blog-chatgpt-vs-otras-ia': () => import('./BlogPostChatGPTVsOtrasIA'),
  'blog-tareas-administrativas-ia': () => import('./BlogPostKeywordCluster'),
  'blog-agentes-ia-procesos': () => import('./BlogPostKeywordCluster'),
  'blog-automatizacion-ia-whatsapp': () => import('./BlogPostKeywordCluster'),
  'blog-ia-generativa-pymes': () => import('./BlogPostKeywordCluster'),
  'blog-n8n-ia-pymes': () => import('./BlogPostKeywordCluster'),
  'blog-make-ia-pymes': () => import('./BlogPostKeywordCluster'),
  'blog-procesos-contables-ia': () => import('./BlogPostKeywordCluster'),
  'blog-marketing-digital-ia': () => import('./BlogPostKeywordCluster'),
  'blog-automatizacion-ia-gratis': () => import('./BlogPostKeywordCluster'),
  'blog-curso-automatizacion-ia': () => import('./BlogPostKeywordCluster'),
  'blog-industrial-ia-pymes': () => import('./BlogPostKeywordCluster2'),
  'blog-n8n-vs-make': () => import('./BlogPostKeywordCluster2'),
  'blog-power-automate-ia': () => import('./BlogPostKeywordCluster2'),
  'blog-email-ia-pymes': () => import('./BlogPostKeywordCluster2'),
  'blog-facturas-ia-pymes': () => import('./BlogPostKeywordCluster2'),
  'blog-lead-scoring-ia': () => import('./BlogPostKeywordCluster2'),
  'blog-roi-automatizacion-ia': () => import('./BlogPostKeywordCluster2'),
  'blog-seguridad-datos-ia': () => import('./BlogPostKeywordCluster2'),
  'blog-mantenimiento-automatizaciones-ia': () => import('./BlogPostKeywordCluster2'),
  'blog-piloto-automatizacion-ia': () => import('./BlogPostKeywordCluster2'),
  'blog-youtube-ia-pymes': () => import('./BlogPostKeywordCluster3'),
  'blog-google-workspace-ia-pymes': () => import('./BlogPostKeywordCluster3'),
  'blog-manychat-ia-pymes': () => import('./BlogPostKeywordCluster3'),
  'blog-redes-sociales-ia-pymes': () => import('./BlogPostKeywordCluster4'),
  'blog-logistica-ia-pymes': () => import('./BlogPostKeywordCluster4'),
  'blog-principiantes-ia-pymes': () => import('./BlogPostKeywordCluster4'),
};

const rootEl = document.getElementById('root')!;
const pageName = rootEl.dataset.page ?? '';
const loadPage = pageMap[pageName];
const LazyPage = loadPage ? React.lazy(loadPage) : null;

const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      {LazyPage ? <LazyPage /> : null}
    </Suspense>
  </React.StrictMode>
);
