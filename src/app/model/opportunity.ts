export interface Opportunity {
    Cuota: string;
    Account_Id: string;
    Stage: string;
    LastStageChangeDate?: Date;
    Close_Date?: Date;


    Usuario_Portal: string;
    Type: null;
    Tienda_de_preferencia: null;
    Telefono: null;
    SystemModstamp: Date;
    Synced_Quote: null;
    ROI_Analysis_Completed: boolean;
    PushCount: number;
    Prospecto: null;
    Probability: number;
    Primary_Campaign_Source: null;
    Price_Book: null;
    Plazo: null;
    Opportunity_Owner: string;
    Opportunity_Name: string;
    Observaciones: null;
    Numero_de_Factura: null;
    Nombre_del_vendedor: null;
    Nombre_Completo: null;
    Next_Step: null;
    Monto_Prima: null;
    Monto_Financiammiento: null;
    Monto_final: null;
    Loss_Reason: null;
    Lead_Source: null;
    LastViewedDate: Date;
    LastReferencedDate: Date;
    LastModifiedDate: Date;
    LastCloseDateChangedHistoryId: string;
    LastAmountChangedHistoryId: null;
    LastActivityDate_lad: null;
    Last_Modified_By: string;
    IsWon_iw: boolean;
    IsDeleted_id: boolean;
    IsClosed: boolean;
    Impuestos: null;
    Identificacion: null;
    Id: string;
    HasOverdueTask_hot: boolean;
    HasOpportunityLineItem_hol: boolean;
    HasOpenActivity: boolean;
    FrecuenciaPago: null;
    FormaPago: null;
    ForecastCategoryName: string;
    ForecastCategory: string;
    FiscalYear: number;
    FiscalQuarter: number;
    Fiscal: string;
    Fecha_envio_de_la_cotizacion: null;
    Estado_de_la_Oportunidad: string;
    Estado_de_Cotizacion: null;
    Estado_de_contactacion: null;
    Email: null;
    Discovery_Completed: boolean;
    Descuento: null;
    Description: null;
    Created_Date: Date;
    Created_By: string;
    Contract: null;
    Contact_Id: null;
    Codigo_Vendedor: null;
    Causas_de_perdida: null;
    Budget_Confirmed: boolean;
    Amount: null;
}

export interface OpportunityEdit {
    email?: string;
    opportunityId: string;
    data: OpportunityEditData;
}
export interface OpportunityEditData {
    Name: string;
    Close_Date?: Date;
}