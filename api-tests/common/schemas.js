
const route = {
    type: 'object',
    additionalProperties: false,
    properties: {
        id: { type: 'number' },
        locationFrom: { type: 'string' },
        locationTo: { type: 'string' },
        description: { type: 'string' }
    },
    required: ['id', 'description']
};

const routeList = {
    type: 'array',
    items: route
};

const trip = {
    type: 'object',
    additionalProperties: false,
    properties: {
        id: { type: 'number' },
        routeId: { type: 'number' },
        startTime: { type: 'string' },
        duration: { type: 'number' },
    },
    required: ['id', 'routeId', 'startTime', 'duration']
};

module.exports.route = route;
module.exports.routeList = routeList;
module.exports.trip = trip;
