
dir_to_watch=$1
tmpfile1=/tmp/fra.$$
tmpfile2=/tmp/fra2.$$

if [ -z $dir_to_watch ]
then
  echo "Usage: $basename $0 \$dir_to_watch"
  exit
fi

cat /dev/null > $tmpfile1
cat /dev/null > $tmpfile2

cd $dir_to_watch
for i in $(find . -name "*css" -o -name "*scss") 
do 
  dirname $i >> $tmpfile1
done

cat $tmpfile1 | sort -u > $tmpfile2

str=
for i in $(cat $tmpfile2)
do
 str="${str} "${i}:${i}
 #echo $str
done

echo $str
rm -f $tmpfile1 $tmpfile2

sass --no-stop-on-error --watch  --no-source-map  $str
#sass --update --no-source-map --no-stop-on-error $str


