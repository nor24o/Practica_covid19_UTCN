%% Retea fitnet 
clear net net2
%%
x = input;
t = judete_target(:,1:length(x));

% Choose a Training Function
% For a list of all training functions type: help nntrain
% 'trainlm' is usually fastest.
% 'trainbr' takes longer but may be better for challenging problems.
% 'trainscg' uses less memory. Suitable in low memory situations.
trainFcn = 'trainlm';  % Levenberg-Marquardt backpropagation.

% Create a Fitting Network
hiddenLayerSize = 17;
net = fitnet(hiddenLayerSize,trainFcn);

% Setup Division of Data for Training, Validation, Testing
net.divideParam.trainRatio = 70/100;
net.divideParam.valRatio = 15/100;
net.divideParam.testRatio = 15/100;
net.trainParam.goal=10e-48;
net.trainparam.epochs = 9000;     
net.trainParam.max_fail = 500;
% Train the Network
[net2,tr] = train(net,x,t);
%[net2,tr] = train(net,x,t,'useParallel','yes','showResources','yes');
%
% Test the Network
y = net2(x);
e = gsubtract(t,y);
performance = perform(net2,t,y)

% View the Network
view(net2)



%% simulat
y2=sim(net2,x);
%
     dat=nr_de_reproductie_virus_ziua(1,1:length(x))
%
     LegendsStrings = cell(length(nume_jud),1)
	 figure;
     for i=1:length(nume_jud)
         LegendsStrings{i} = string(nume_jud(i));
         hold on
         semilogy(dat,y2(i,:))
     end
     title('Cazuri pe judet date de pe geo-spatial Retea Neuronala fitnet ')
     hold off
     xticks(0:5:length(dat))
     legend(LegendsStrings, 'Interpreter', 'none')
  % nesimulat   
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
    
     
     




