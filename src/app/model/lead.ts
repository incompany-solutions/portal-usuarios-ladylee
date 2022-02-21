export interface Lead {
    Zona:                             string;
    Website:                          null;
    Verificacion_Campo_Trabajo:       boolean;
    Verificacion_Campo_Domicilio:     boolean;
    Vendedor:                         string;
    Usuario_Portal:                   string;
    Trabajo_Croquis:                  boolean;
    Title:                            string;
    Tipo_de_identificacion:           string;
    Tipo_de_casa:                     string;
    Tienda_de_Interes:                string;
    Telefono_de_la_empresa:           string;
    SystemModstamp:                   Date;
    Suffix:                           null;
    Street:                           null;
    Status:                           string;
    State:                            null;
    Solicitud_de_credito:             boolean;
    Sexo:                             string;
    Salutation:                       null;
    RTN:                              boolean;
    Resultado_de_consulta_en_Buro:    null;
    Ref_Familiar_No_Responde:         boolean;
    Ref_Amistad_No_Responde:          boolean;
    Recibo_publico:                   boolean;
    Razon:                            null;
    Rating:                           string;
    Profesion_u_oficio:               string;
    PostalCode:                       null;
    Poliza_de_Seguro:                 boolean;
    PhotoUrl:                         string;
    Phone:                            string;
    Permiso_Operacion:                boolean;
    Pendiente_firma_en_sol:           boolean;
    Origen_del_candidato:             null;
    Numero_de_dependientes:           number;
    Nombre_del_vendedor:              string;
    Nombre_de_referencia_familiar_2:  string;
    Nombre_de_referencia_familiar_1:  string;
    Nombre_de_referencia_amistad_2:   string;
    Nombre_de_referencia_amistad_1:   string;
    No_of_Employees:                  null;
    Name:                             string;
    Mobile:                           null;
    MiddleName:                       null;
    MasterRecordId:                   null;
    Longitude:                        null;
    Lead_Source:                      string;
    Lead_Owner:                       string;
    Latitude:                         null;
    LastViewedDate:                   Date;
    LastReferencedDate:               Date;
    LastName:                         string;
    LastModifiedDate:                 Date;
    LastActivityDate:                 null;
    Last_Transfer_Date:               Date;
    Last_Modified_By:                 string;
    JigsawContactId:                  null;
    IsUnreadByOwner:                  boolean;
    IsDeleted:                        boolean;
    IsConverted:                      boolean;
    Ingresos_mensual:                 number;
    Industry:                         null;
    Individual:                       null;
    Identidad_Segunda:                boolean;
    Identidad:                        string;
    Id:                               string;
    GeocodeAccuracy:                  null;
    Foto_del_prospecto:               null;
    FirstName:                        string;
    Fecha_Vencimiento_Credito:        Date;
    Fecha_de_nacimiento:              Date;
    Fecha_de_Aprobacion:              Date;
    Fax_Opt_Out:                      boolean;
    Fax:                              null;
    Estado_del_credito:               string;
    Estado_Credi_Lee:                 null;
    Estado_civil:                     string;
    EmailBouncedReason:               null;
    EmailBouncedDate:                 null;
    Email_Opt_Out:                    boolean;
    Email:                            string;
    Domicilio_croquis:                boolean;
    Do_Not_Call:                      boolean;
    Direccion_de_trabajo:             string;
    Direccion_completa:               string;
    Description:                      null;
    Departamento:                     string;
    Data_com_Key:                     null;
    CreatedDate:                      Date;
    Created_By:                       string;
    Country:                          null;
    ConvertedOpportunityId:           null;
    ConvertedDate:                    null;
    ConvertedContactId:               null;
    ConvertedAccountId:               null;
    Contrato_Compra_Venta:            boolean;
    Contrato_Arrendamiento:           boolean;
    Contra_Entrega:                   boolean;
    Contado_o_credito:                null;
    Constancia_Identidad:             boolean;
    Confirmacion_telefono_movil:      boolean;
    Confirmacion_telefonica_laboral:  boolean;
    Comprobante_de_Ingreso:           boolean;
    Company:                          string;
    Compania:                         string;
    Ciudad:                           string;
    City:                             null;
    Celular_de_referencia_familiar_2: string;
    Celular_de_referencia_familiar_1: string;
    Celular_de_referencia_amistad_2:  string;
    Celular_de_referencia_amistad_1:  string;
    Carnet_Escalafon:                 boolean;
    Carnet_de_trabajo:                boolean;
    Cambiar_Referencia:               boolean;
    Buro:                             null;
    Aval:                             boolean;
    AntiguedadDomicilio:              number;
    Antiguedad_laboral_meses:         number;
    Annual_Revenue:                   null;
    Address:                          null;
    actualizacionDatod:               string;
}

export interface LeadEdit {
    email?: string;
    leadId: string;
    data: LeadEditData;
}
export interface LeadEditData {
    Company: string;
    Title?: string;
}