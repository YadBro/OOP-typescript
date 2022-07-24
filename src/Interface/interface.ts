/*
Interface class hampir mirip dengan abstract class.

    [[ INTERFACE ]] adalah sebuah kelas abstrak yang tidak boleh memiliki property, hanya deklarasi
    method interfacenya saja
    == interface == 

    Gunakan keyword interface untuk membuat interface

    Interface simplenya sebagai kontrak atau SOP atau standar khusus dari class itu sendiri yang wajib di ikuti!.
*/

interface MorningActivity {
  eat(): void;
}

interface NoonActivity {
  lunch(): void;
}

export {MorningActivity, NoonActivity};