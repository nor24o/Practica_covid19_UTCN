%Pentru Rulare in bara de comenzi apelam numele fisierului,parametri
%acestuia

function elman_neuron(timp,data,epoch,predict)

clearvars  net net2 
nume_plot=inputname(2)
%Here is a series of Boolean inputs P, and another sequence T
% which is 1 wherever P has had two 1's in a row.

P=timp';
T=data';

if isempty(epoch)
    epoch=4000;
end
if isempty(predict)
    predict=800;
end

% We would like the network to recognize whenever two 1's
% occur in a row.  First we arrange these values as sequences.

Pseq = con2seq(P);
Tseq = con2seq(T);

% Here we create a network with one hidden layer of 10 neurons.

net = newelm(P,T,17,{'tansig','purelin'});
net.trainParam.goal=1e-320;
net.trainparam.epochs = epoch;
net.trainParam.max_fail = 200;


% Then we train the network with a mean squared error goal of
% 0.1, and simulate it.

net2 = train(net,Pseq,Tseq);

u=0:1: predict;
uo= con2seq(u);
y=sim(net2,uo) ;
z = seq2con(y);
op=cell2mat(z)
figure;
plot(u,op,'r')

hold on
plot(P,T,'b')
legend(nume_plot,'Original', 'Interpreter', 'none')

title(nume_plot, 'Interpreter', 'none');
end