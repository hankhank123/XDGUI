using my.zbookshop2 from '../db/data-model';
service CatalogService {
  entity Books    as projection on zbookshop2.Books;
  entity Authors  as projection on zbookshop2.Authors;
  entity Orders   as projection on zbookshop2.Orders;
}