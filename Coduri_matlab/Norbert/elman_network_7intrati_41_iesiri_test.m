
%%   Create an Elman backpropagation network Decese totale Romania
clear net net2
%%
P=input;
T=judete_target(:,1:length(P));
% occur in a row.  First we arrange these values as sequences.

Pseq = con2seq(P);
Tseq = con2seq(T);

% Here we create a network with one hidden layer of 10 neurons.

net = newelm(P,T,17);
net.trainParam.goal=10e-32;
net.trainparam.epochs = 9000;
net.trainParam.max_fail = 200;

net2 = train(net,Pseq,Tseq);
% View the Network
view(net2)
% simulare
y=sim(net2,Pseq) ;
y2=cell2mat(seq2con(y));


% View the Network
view(net2)



%% simulat
y2=sim(net2,Pseq);
y2=cell2mat(y2);
%%
     dat=nr_de_reproductie_virus_ziua(1,1:length(P))
%
     LegendsStrings = cell(length(nume_jud),1)
	 figure;
     for i=1:length(nume_jud)
         LegendsStrings{i} = string(nume_jud(i));
         hold on
         semilogy(dat,y2(i,:))
     end
     title('Cazuri pe judet date de pe geo-spatial Retea Neuronala Elman ')
     hold off
     xticks(0:5:length(dat))
     legend(LegendsStrings, 'Interpreter', 'none')
  % nesimulat   
   figure;
   
      LegendsStrings = cell(length(nume_jud),1)
     for i=1:length(nume_jud)
         LegendsStrings{i} = string(nume_jud(i));
         hold on
         semilogy(dat,T(i,:))
     end
     title('Cazuri pe judet date de pe geo-spatial Initial ')
     hold off
     xticks(0:5:length(dat))
     legend(LegendsStrings, 'Interpreter', 'none')
      