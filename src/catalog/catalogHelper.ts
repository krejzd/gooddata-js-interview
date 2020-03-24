import {CatalogHelper} from "@gooddata/react-components";
import {ICatalog} from "@gooddata/react-components/dist/helpers/CatalogHelper";

type CatalogProps = ICatalog & {
  projectId: string
}

class CatalogHelperExtended extends CatalogHelper{
  public projectId: string;

  constructor(props: CatalogProps) {
    super(props);
    this.projectId = props.projectId;
  }

}

export default CatalogHelperExtended;