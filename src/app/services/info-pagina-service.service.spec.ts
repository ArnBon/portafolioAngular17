import { TestBed } from '@angular/core/testing';

import { InfoPaginaServiceService } from './info-pagina-service.service';

describe('InfoPaginaServiceService', () => {
  let service: InfoPaginaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPaginaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
