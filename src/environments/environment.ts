// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  urls: {
    token: 'https://us-central1-ladylee-angular.cloudfunctions.net/app/getToken',
    login: '/api/login',
    opportunities: '/api/opportunities',
    updateOpportunity: '/api/updateOpportunity',
    leads: '/api/leads',
    updateLead: '/api/updateLead',
    tasks:'/api/tasks',
    updateTask:'/api/updateTask',
    createTask: '/api/createTask'
  },
};