package ma.abisoft.web.util;

import java.util.Comparator;
import java.util.Map;

public class ValueCompare implements Comparator<String>{
    private Map<String,Double> map;
    public ValueCompare(Map<String,Double> map) {
    	this.map=map;
	}
	@Override
	public int compare(String k1, String k2) {
		Double value1=map.get(k1);
		Double value2=map.get(k2);
		int diff=value2.compareTo(value1);
		if(diff==0){
			return k1.compareTo(k2);
		}
		return diff;
	}
	

}
