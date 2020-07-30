t=Cazuri(:,1);
cazuri_totale=Cazuri(:,2);
cazuri_active=Cazuri(:,3);
decese=Cazuri(:,4);
vindecati=Cazuri(:,5);

plot(t,[cazuri_totale,cazuri_active,decese,vindecati])
