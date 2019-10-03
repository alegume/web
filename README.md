# HTML 5
Repositório didático sobre HTML 5, CSS 3 e Bootstrap 4 e GIT. Usado nas disciplinas de Programação para a Internet I e Tecnologias para Web no IFSC - Canoinhas.


### GIT (Lembretes)

1) Clonar Repositório

   `git clone https://github.com/alegume/web.git`

2) Adicionar arquivos novos

   `git add .`

3) Adicionar arquivos alterados e fazer o commit

   `git commit -am "Modificacoes XYZ"`

4) Enviar para a master do servidor (commitar primeiro)

   `git push origin master`

5) Verificar as branches

   `git branch`

6) Verificar todas as branches (inclusive remotas)

   `git branch --all`

7) Criar uma nova branch

   `git branch nome-da-nova-branch`

8) Faça checkout na nova branch para trabalhar na mesma

   `git checkout nome-da-nova-branch`

9) Enviar nova branch para o servidor (commitar primeiro)

   `git push origin nome-da-nova-branch`

10) Fazer merge da nova branch para a master (faça checkout na master primeiro)

   `git merge nome-da-nova-branch`

Opcionalmente, pode-se ignorar o fast-forward para preservar a topologia original do histórico de branchs

   `git merge nome-da-nova-branch --no-ff`

11) Deletar uma branch local

   `git branch -d nome-da-nova-branch`

12) Deletar uma branch remota (cuidado!)

   `git push origin :the_remote_branch`

  Outra opção, mais verbosa, seria:

    `git push origin --delete the_remote_branch`

13) Ver as branchs que já foram mergeadas na branch atual

   `git branch --merged`

13) Ver as branchs que NÃO foram mergeadas na branch atual

   `git branch --no-merged`

14) Sincronizar (só "baixa") as modificações do servidor

   `git fetch origin --all`

15) Remover arquivo pelo gitinore caso já tenha sido commitado anteriormente

   `git rm --cached name.txt`

16) Reverter os arquivos para um versão anterior em caso de erro

   `git reset --hard 87c581f09f680531b6b0eaee9329d364e961a7c3`

  Git reset irá voltar o histórico de commits mas não os arquivos. Para resetar o histórico e os arquivos, é necessário usar a opção --hard. Após reverter o histórico e os arquivos, é necessário incluir o parâmetro --force ao efetuar o push. Veja um exemplo:
   `git push origin develop --force`

17) Criar uma nova tag e enviar para o servidor:
    `git tag -a 1.2.3`
    `git push origin 1.2.3`
