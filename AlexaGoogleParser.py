

alexa_file = "alexa.json"


def gather_alexa_json(alexa_file):
	with open (alexa_file, "r") as alexafile:
		alexa_data=alexafile.read().splitlines()
		return alexa_data

def parse_intent_names():
	alexa_data = gather_alexa_json(alexa_file)
	intent_list = []
	for line in alexa_data:
		if "types" in line:
			break
		if "name" in line:
			start = line.index(":") + 2
			end = line.index(",") 
			intent = line[start:(start+end-14)]
			intent_list.append(intent)
	return intent_list


	




def build_intent_files(intent_names, sample_text):
	g_intent_start = """
		{
  		  "userSays": [
    		  {
      		    "id": NULL,
      			"data": [
        		  {
          			"text":"""

   	# print (g_intent_start)      

# def build_entity_files(entity_names, entries, synonyms):




# gather_alexa_json(alexa_file)
# build_intent_files("hello","hello")
parse_intent_names()
