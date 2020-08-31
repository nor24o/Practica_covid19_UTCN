%% Feedforward
clear net net2
%%
x = input;
t = judete_target(:,1:length(x));

% Create a Fitting Network
hiddenLayerSize = 13;
net = feedforwardnet(hiddenLayerSize,trainFcn);
% Setup Division of Data for Training, Validation, Testing
net.divideParam.trainRatio = 70/100;
net.divideParam.valRatio = 15/100;
net.divideParam.testRatio = 15/100;
net.trainParam.goal=10e-48;
net.trainparam.epochs = 5000;
net.trainParam.max_fail = 40;
%% Train the Network
[net2,tr] = train(net,x,t);
% Test the Network
y = net2(x);
e = gsubtract(t,y);
performance = perform(net2,t,y)

% View the Network
view(net2)
% simulare
y2=sim(net2,x);
%    
     figure;
     dat=nr_de_reproductie_virus_ziua(1,1:length(x))
     LegendsStrings = cell(length(nume_jud),1)
	 
     for i=1:length(nume_jud)
         LegendsStrings{i} = string(nume_jud(i));
         hold on
         semilogy(dat,y2(i,:))
     end
     title('Cazuri pe judet date de pe geo-spatial Retea Neuronala feedforward ')
     hold off
     xticks(0:5:length(dat))
     legend(LegendsStrings, 'Interpreter', 'none')
 %% nesimulat   
   figure;
   
     LegendsStrings = cell(length(nume_jud),1)
     for i=1:length(nume_jud)
         LegendsStrings{i} = string(nume_jud(i));
         hold on
         semilogy(dat,t(i,:))
     end
     title('Cazuri pe judet date de pe geo-spatial Initial ')
     hold off
     xticks(0:5:length(dat))
     legend(LegendsStrings, 'Interpreter', 'none')


