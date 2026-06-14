import api from './api'

export const submitApplication  = (data)       => api.post('/apply', data)
export const getMyApplications  = ()           => api.get('/applications/me')
export const getAllApplications = ()           => api.get('/applications')
export const updateAppStatus    = (id, status) => api.put(`/applications/${id}`, { status })