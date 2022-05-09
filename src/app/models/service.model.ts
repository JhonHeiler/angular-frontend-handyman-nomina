export interface Service {
  id?: string;
  idTechnical: string;
  idService: string;
  startDate: string;
  endDate: string;
}

export interface ServiceConsult {
  idTechnical: string;
  normalHours: number;
  nightHours: number;
  sundayHours: number;
  normalOvertime: number;
  extraNightHours: number;
  extraSundayHours: number;
}


export interface ServiceQuery {
  idTechnical: string;
  weekNumber: string;
}
