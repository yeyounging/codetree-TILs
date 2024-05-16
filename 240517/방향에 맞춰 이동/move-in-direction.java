import java.util.*;
import java.io.*;

public class Main{
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(br.readLine());
        //동서남북
        int[] dx = {1,-1,0,0};
        int[] dy = {0,0,-1,1};

        int curx=0;
        int cury=0;

        for(int i=0;i<n; i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            String dir = st.nextToken();
            int k = Integer.parseInt(st.nextToken());
            switch (dir){
                case "N" :
                   curx +=dx[3]*k;
                   cury +=dy[3]*k;
                   break;
                case "E" :
                    curx +=dx[0]*k;
                    cury +=dy[0]*k;
                    break;
                case "S" :
                    curx +=dx[2]*k;
                    cury +=dy[2]*k;
                    break;
                case "W" :
                    curx +=dx[1]*k;
                    cury +=dy[1]*k;
                    break;
            }

        }
        bw.write(curx +" "+ cury);
        bw.flush();
        bw.close();
    }


        }