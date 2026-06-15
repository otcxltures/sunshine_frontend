import api from './api'

export const getSchoolInfo = () => api.get('/school-info')
export const updateSchoolInfo = (data) => api.put('/school-info', data)
