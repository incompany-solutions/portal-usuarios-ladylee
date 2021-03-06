export interface Lead {
    ActualizaciondeDatos: string;
    AnnualRevenue: string;
    Antigedaddedomiciliciliomeses: string;
    Bur: string;
    CambiarReferencia: string;
    Carnetdetrabajo: string;
    Antigedadlaboralmeses: string;
    Celulardereferenciaamistad2: string;
    Aval: string;
    Celulardereferenciaamistad1: string;
    LeadID: string;
    Celulardereferenciafamiliar2: string;
    Celulardereferenciafamiliar1: string;
    CarnetEscalafon: string;
    Ciudad: string;
    Company: string;
    City: null;
    Confirmaciontelefonicalaboral: string;
    ComprobantedeIngreso: string;
    Contadocrdito: string;
    ContraEntrega: string;
    ContratoArrendamiento: string;
    ConvertedAccountID: null;
    Confirmaciontelefonomovil: string;
    Country: null;
    CreatedByID: string;
    Compaia: string;
    ContratoCompraVenta: string;
    Converted: string;
    ConvertedContactID: null;
    ConvertedOpportunityID: null;
    ConstanciaIdentidad: string;
    Direccincompleta: string;
    Deleted: string;
    Direccindetrabajo: string;
    DatacomKey: null;
    Domiciliocroquis: string;
    CreatedDate: Date;
    Description: null;
    EmailBouncedReason: null;
    Departamento: string;
    ConvertedDate: null;
    Email: string;
    Estadocivil: string;
    EmailOptOut: string;
    EmailBouncedDate: null;
    DoNotCall: string;
    FaxOptOut: string;
    EstadoCrediLee: string;
    FechadeAprobacion: Date;
    FirstName: string;
    Fechadenacimiento: Date;
    Fax: string;
    Fotodelprospecto: null;
    GeocodeAccuracy: null;
    IndividualID: null;
    Identidad: string;
    IdentidadSegunda: string;
    FechaVencimientoCrdito: Date;
    LastModifiedByID: string;
    LastActivity: null;
    Ingresosmensual: string;
    LastTransferDate: Date;
    JigsawContactID: null;
    Industry: string;
    LastModifiedDate: Date;
    LastName: string;
    LastViewedDate: Date;
    Latitude: null;
    MasterRecordID: null;
    Longitude: null;
    LeadSource: string;
    Estadodelcrdito: string;
    FullName: string;
    Status: string;
    OwnerID: string;
    Employees: number;
    Nombredereferenciafamiliar1: string;
    MobilePhone: string;
    LastReferencedDate: Date;
    Nombredereferenciaamistad2: string;
    MiddleName: null;
    Nmerodedependientes: string;
    Nombredelvendedor: string;
    PhotoURL: string;
    Nombredereferenciafamiliar2: string;
    Origendelcandidato: null;
    Phone: string;
    Pendientefirmaensol: string;
    PermisoOperacion: string;
    PolizadeSeguro: string;
    Rating: string;
    Recibopublico: string;
    Profesinuoficio: string;
    Razn: string;
    RefAmistadNoResponde: string;
    ResultadodeconsultaenBur: null;
    RTN: string;
    Salutation: null;
    RefFamiliarNoResponde: string;
    Sexo: string;
    Solicituddecredito: string;
    Street: null;
    Suffix: null;
    Telefonodelaempresa: string;
    StateProvince: null;
    TiendadeInteres: string;
    SystemModstamp: Date;
    Tipodeidentificacin: string;
    Title: string;
    UsuarioPortal: string;
    TrabajoCroquis: string;
    Tipodecasa: string;
    UnreadByOwner: string;
    Nombredereferenciaamistad1: string;
    VerificacionCampoDomicilio: string;
    Validacionesdelcrdito: null;
    Website: string;
    Vendedor: string;
    ZipPostalCode: null;
    Zona: string;
    VerificacionCampoTrabajo: string;
}

export interface LeadEdit {
    email?: string;
    leadId: string;
    data: Lead;
}