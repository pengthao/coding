import matplotlib.pyplot as plt
import pandas as pd


open_files = open("CupcakeInvoices.csv")


for lines in open_files:
    lines = lines.strip()
    values = lines.split(",")

    if len(values) >= 4:
        count = float(values[3])
        cost = float(values[4])
        total=count*cost
        f_total = f'{total:.2f}'
        print(f_total)

"""     if len(values) > 2:
        elem = values[2]
        print(elem) """
df=pd.read_csv("CupcakeInvoices.csv", header=None)

flavor_income = df.groupby(df[2]).apply(lambda x: (x[3] * x[4]).sum())

flavors = flavor_income.index
incomes = flavor_income.values


plt.figure(figsize=(8, 6))
plt.bar(flavors, incomes, color=['brown', 'pink', 'lightgray'])  # Colors for chocolate, vanilla, and strawberry cupcakes
plt.xlabel('Cupcake Flavor')
plt.ylabel('Total Income')
plt.title('Total Income from Different Cupcake Flavors')
plt.show()


open_files.close()