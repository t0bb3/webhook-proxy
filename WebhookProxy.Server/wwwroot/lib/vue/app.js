var app = new Vue({
    el: '#app',

    data: {
        status: '',
        serverConnectionId: null,
        serverConnectionState: 'disconnected',

        currentTransaction: null,
        transactionLog: [],
        destinationRequestTimeout: 10000,
        destinationEndpointUrl: 'http://localhost:50009/return/200',
        
        domainName: window.location.origin,
        hideTransactionHeaders: true,

        moment: function (date) {
            return moment(date);
        },

        webhookEndpointEditMode: false,
        destinationEndpointEditMode: false,

        webhookEndpoint: '?',
        editWebhookEndpoint: '?',

    }
})