export interface Opportunity {
    BudgetConfirmed: string;
    CodigoVendedor: string;
    AccountID: string;
    Closed: string;
    Causasdeprdida: null;
    CloseDate: Date;
    ContactID: null;
    Contactado: string;
    Amount: string;
    ContractID: null;
    OpportunityID: string;
    Email: string;
    Description: string;
    CreatedByID: string;
    Estadodecontactacin: string;
    Fechaenviodelacotizacin: null;
    CreatedDate: Date;
    Stage: string;
    ExpectedAmount: null;
    Descuento: string;
    Name: string;
    DiscoveryCompleted: string;
    LastModifiedDate: Date;
    Deleted: string;
    LastModifiedByID: string;
    Identificacion: string;
    LastActivity: null;
    Impuestos: string;
    Formadepago: string;
    Cuota: string;
    HasLineItem: string;
    FrecuenciaPago: string;
    HasOpenActivity: string;
    LeadSource: string;
    LossReason: null;
    OpportunityHistoryID: string;
    LLamadaparalavisitaaTienda: string;
    Llamadaparaconfirmarcotizacin: string;
    LastReferencedDate: Date;
    MontoFinanciammiento: string;
    Montodelacotizacion: null;
    Llamadasrealizadas: null;
    HasOverdueTask: string;
    FiscalPeriod: string;
    LastStageChangeDate: Date;
    FiscalQuarter: string;
    Montofinal: string;
    LastViewedDate: Date;
    EstadodelaOportunidad: string;
    MontoPrima: string;
    NextStep: null;
    OwnerID: string;
    Observaciones: string;
    NombreCompleto: string;
    OpportunityScore: null;
    Nombredelvendedor: string;
    Plazo: string;
    Prima: null;
    FiscalYear: string;
    ForecastCategory: string;
    Probability: string;
    EstadodeCotizacin: string;
    PushCount: string;
    Private: string;
    QuoteID: null;
    ltimallamada: null;
    Saldo: null;
    Prospecto: string;
    SystemModstamp: Date;
    ROIAnalysisCompleted: string;
    OpportunityType: string;
    Telefono: string;
    UsuarioPortal: string;
    Vendedor: null;
    CampaignID: null;
    Won: string;
    PriceBookID: null;
    Tiendadepreferencia: string;
    Quantity: null;
    NumerodeFactura: string;
    Ventaoprdida: string;
}


export interface OpportunityEdit {
    email?: string;
    opportunityId: string;
    data: Opportunity;
}