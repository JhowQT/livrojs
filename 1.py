"""
criar lista de alunos

criar um lista de alunos e cada um deles tem sua "ficha"
Dps eles fazer a médai deles e pegar essa média
Para no final comparar entre os aluos qual teve a maior e menor nota.

criar lista de alunos com seu numero de chamada
calcular a media  de cada um, e depois mostrar a lista de todos os 
alunos com sua média, mostrando quem se destacou mais com um print
"""

while True:

    print(" LISTA DE ALUNOS: \n"
        "João , 1 \n"
        "Jhonatan, 2 \n"
        "Thaisa, 3 \n"
        "Maria, 4 \n")

    aluno = int(input("Qual e o seu número de chamada? "))
    print("Para sair do programa digite 0")
    print(aluno)

    if aluno == 0:
        break

    if aluno == 1:
        print("Digite de 0 a 100 as notas nas 5 matérias, para mostrarmos se você está ou não aprovado!")
        print("Média das matérias bimestrais\n"
            "História: \n"
            "Geografia: \n"
            "Matématica: \n"
            "Portugues: \n" 
            "Ciencias: \n")

        historia = int(input("Digite a tua nota de 0 a 100 em História: "))
        geografia = int(input("Digite a tua nota de 0 a 100 em Geografia: "))
        matematica = int(input("Digite a sua nota de 0 a 100 em Matématica: "))
        portugues = int(input("Digite a sua nota de 0 a 100 em Portugues "))
        ciencias = int(input("Digite a sua nota de 0 a 100 em Ciencias: "))

        media = (historia + geografia + matematica + portugues + ciencias) / 5
        joao = media

    elif aluno == 2:
        print("Digite de 0 a 100 as notas nas 5 matérias, para mostrarmos se você está ou não aprovado!")
        print("Média das matérias bimestrais\n"
            "História: \n"
            "Geografia: \n"
            "Matématica: \n"
            "Portugues: \n" 
            "Ciencias: \n")
        
        historia = int(input("Digite a tua nota de 0 a 100 em História: "))
        geografia = int(input("Digite a tua nota de 0 a 100 em Geografia: "))
        matematica = int(input("Digite a sua nota de 0 a 100 em Matématica: "))
        portugues = int(input("Digite a sua nota de 0 a 100 em Portugues "))
        ciencias = int(input("Digite a sua nota de 0 a 100 em Ciencias: "))

        media = (historia + geografia + matematica + portugues + ciencias) / 5
        jhonatan = media
