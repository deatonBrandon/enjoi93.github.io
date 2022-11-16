using System;
using static System.Console;
using static System.Array;
using System.Xml.Schema;
using System.Runtime.CompilerServices;
using System.Diagnostics.CodeAnalysis;

namespace CommissionCalculator
{
    internal class Program
    {
        static void Main()
        {
            Sale[] SalesAccounts = new Sale[50];
            char doAgain = 'Y';
            int counter = 0;
            TotalSales ts = new TotalSales();

            while (doAgain != 'N' && counter < SalesAccounts.Length)
            {
                try
                {
                    GetData(out string custName, out double wholeSale, out double addOn);
                    SalesAccounts[counter] = new Sale(custName, wholeSale, addOn);
                    counter++;
                }
                catch (FormatException error)
                {
                    WriteLine(error.Message);
                }

                Write("\tDo you want to enter another sale? Y or N: ");
                doAgain = Char.Parse(ReadLine().ToUpper());
                WriteLine();
            }

            WriteLine("\n\t********* Account Details *********\n");
            for (int x = 0; x < counter; x++)
            {
                WriteLine(SalesAccounts[x].ToString());
                ts.Total += SalesAccounts[x].Total;
            }
            
            WriteLine("\n"+"Your Sales Total: " + ts.Total.ToString("C") +"\n"+
                "Commission: " + ts.CommissionTotal.ToString("C"));
            Write("\nPress any key to continue. . .");
            _=ReadLine();


        }

        static void GetData(out string custName, out double wholeSale, out double addOn)
        {
            try
            {
                Write("Please enter customer's name for this order: ");
                custName = ReadLine();
                Write("Please enter the sauna sale only: ");
                wholeSale = double.Parse(ReadLine());
                Write("Please enter total amount of add ons for this sale: ");
                addOn = double.Parse(ReadLine());
                WriteLine();
            }
            catch (FormatException)
            {
                throw;
            }
        }
    }

    class Sale
    {
        private double total;
        public string CustName { get; set; }
        public double WholeSale { get; set; }
        public double AddOn { get; set; }
        public double Total
        {
            get
            {
                total = WholeSale + AddOn;
                return total;
            }

        }
        
        public Sale(string custName, double wholeSale, double addOn)
        {
            CustName = custName;
            WholeSale = wholeSale;
            AddOn = addOn;
        }

        public override string ToString()
        {
            return ("Customer Name: " + CustName + "\n" + "Sale W/o Add-On: "
            + WholeSale.ToString("C") + "\n" + "Total Amount of Add-Ons: "
            + AddOn.ToString("C") + "\n\n" + "Your total is: "+Total.ToString("C")+"\n");
        }
    }

    public class TotalSales
    {
        private const double TIER_1 = .05, TIER_2 = .06, TIER_3 = .075, TIER_4 = .08;
        private double cap1 = 49_999, cap2 = 99_999, cap3 = 199_999;
        private double commissionTotal;
        public double Total { get; set; }
        public double CommissionTotal
        {
            get
            {
                switch (Total)
                {
                    case double n when (n <= cap1):
                        commissionTotal = Total * TIER_1;
                        break;
                    case double n when (n <= cap2):
                        commissionTotal = Total * TIER_2;
                        break;
                    case double n when (n <= cap3):
                        commissionTotal = Total * TIER_3;
                        break;
                    case double n when (n > cap3):
                        commissionTotal = Total * TIER_4;
                        break;
                    default:
                        WriteLine("Error reached. . .");
                        break;
                }
                return commissionTotal;
            }
        }
    }
}
