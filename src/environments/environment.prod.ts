export const environment = {
  production: true,

  urls: {
    token: 'https://us-central1-ladylee-angular.cloudfunctions.net/app/getToken',
    login: 'https://ladylee--partialqa.my.salesforce.com/services/apexrest/Login',
    opportunities: 'https://ladylee--partialqa.my.salesforce.com/services/apexrest/GetOpportunities',
    updateOpportunity: 'https://ladylee--partialqa.my.salesforce.com/services/apexrest/UpdateOpportunity',
    leads: 'https://ladylee--partialqa.my.salesforce.com/services/apexrest/GetLeads',
    updateLead: 'https://ladylee--partialqa.my.salesforce.com/services/apexrest/UpdateLead',
    tasks:'https://ladylee--partialqa.my.salesforce.com/services/apexrest/GetTasks',
    updateTask:'https://ladylee--partialqa.my.salesforce.com/services/apexrest/UpdateTask',
    createTask: 'https://ladylee--partialqa.my.salesforce.com/services/apexrest/CreateTask'
  },
};