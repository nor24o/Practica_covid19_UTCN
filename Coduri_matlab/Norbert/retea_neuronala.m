%% incarcare date

inputs=data_zile'
targets=cazuri_totale_ro_geo'

net = feedforwardnet(20,'trainlm');
net.divideParam.trainRatio = 70/100;
net.divideParam.valRatio = 15/100;
net.divideParam.testRatio = 15/100;
net.trainParam.goal=0.0001;
net.trainparam.epochs = 5000;     
net.trainParam.max_fail = 500;
%% training
     net2 = train(net,inputs,targets);

%% plot
u=0:1: 300
y=sim(net2,u)' ;

plot(u,y,'r')
hold on 
plot(data_zile,targets','b')
     
	 
%% incarcare date
inputs=data_zile'
targets=cazuri_totale_ro_geo'

net = newff(inputs,targets,20);

 net.trainParam.goal=0.0001;
net.trainparam.epochs = 5000;     
net.trainParam.max_fail = 500;
%% training
  net2 = train(net,inputs,targets);
%% plot
u=0:1:300
y=sim(net2,u)' ;

plot(u,y,'r')
hold on 
plot(data_zile,targets','b')
     